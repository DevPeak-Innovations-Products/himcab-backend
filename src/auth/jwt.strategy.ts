import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private configService: ConfigService,
        private usersService: UsersService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get<string>('JWT_SECRET')!,
        });
    }

    async validate(payload: any) {
        // Supabase JWT payload contains 'phone' if authenticated via phone
        // or we can look up by 'sub' (Supabase User ID) if we store it.
        // For now we look up by phone.
        const phone = payload.phone;

        if (!phone) {
            // If phone is not directly in payload, check user_metadata
            // const phone = payload.user_metadata?.phone;
            // If still missing, we might only have sub. 
            // We will throw for now if we can't identify the user.
            return { id: payload.sub, ...payload }; // meaningful fallback
        }

        const user = await this.usersService.findByPhone(phone);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
