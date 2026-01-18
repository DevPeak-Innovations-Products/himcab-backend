import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) { }

    async sendOtp(phone: string) {
        // Mock OTP service
        console.log(`OTP for ${phone} is 1234`);
        return { message: 'OTP sent successfully', mockOtp: '1234' };
    }

    async verifyOtp(phone: string, otp: string) {
        if (otp !== '1234') {
            throw new UnauthorizedException('Invalid OTP');
        }

        let user = await this.usersService.findByPhone(phone);
        if (!user) {
            user = await this.usersService.create({ phone });
        }

        const payload = { sub: user.id, phone: user.phone };
        return {
            access_token: this.jwtService.sign(payload),
            user,
        };
    }
}
