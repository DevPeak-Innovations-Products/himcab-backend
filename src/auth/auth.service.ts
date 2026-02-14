import { Injectable, UnauthorizedException, InternalServerErrorException } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private supabaseService: SupabaseService,
        private usersService: UsersService,
    ) { }

    async sendOtp(phone: string) {
        const { error } = await this.supabaseService.getClient().auth.signInWithOtp({
            phone,
        });
        if (error) {
            throw new InternalServerErrorException(error.message);
        }
        return { message: 'OTP sent successfully' };
    }

    async verifyOtp(phone: string, otp: string) {
        const { data, error } = await this.supabaseService.getClient().auth.verifyOtp({
            phone,
            token: otp,
            type: 'sms',
        });

        if (error || !data.user || !data.session) {
            throw new UnauthorizedException(error?.message || 'Verification failed');
        }

        // Sync with local DB
        let user = await this.usersService.findByPhone(phone);
        if (!user) {
            user = await this.usersService.create({ phone });
        }

        return {
            access_token: data.session.access_token,
            refresh_token: data.session.refresh_token,
            user,
        };
    }
}
