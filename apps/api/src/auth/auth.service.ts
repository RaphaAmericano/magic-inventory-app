import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async authUser(email: string, password: string) {
    try {
      const user = await this.usersService.findByEmail(email);

      if (!user) throw new NotFoundException('User not found');

      const valid = password === user.password;
      if (!valid) throw new UnauthorizedException('Invalid Password');

      // return { token: this.jwtService.sign({ email }), ...user };
      return { token: 'token', ...user };
    } catch (error) {
      throw new Error('Server Error');
    }
  }
}
