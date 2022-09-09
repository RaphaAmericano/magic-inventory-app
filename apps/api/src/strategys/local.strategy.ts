import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string) {
    try {
      const user = await this.authService.authUser(email, password);
      if (!user) {
        throw new UnauthorizedException('Usuário e senha incorretos');
      }
      return user;
    } catch (error) {
      throw error;
    }
  }
}
