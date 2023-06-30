import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtSerice: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<any> {
    // console.log(email, pass);
    const user = await this.userService.findOne(email);
    if (user.password !== pass) {
      throw new UnauthorizedException('Wrong password. Please try again.');
    }
    // Without JWT
    // const { password, ...result } = user;
    // With JWT
    const payload = { sub: user.email, username: user.username };
    // console.log(password);
    const token = await this.jwtSerice.signAsync(payload);
    // console.log('Generated ', token);
    return {
      access_token: token,
    };
  }
}
