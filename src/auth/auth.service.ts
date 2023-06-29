import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async signIn(email: string, pass: string): Promise<any> {
    // console.log(email, pass);
    const user = await this.userService.findOne(email);
    if (user.password !== pass) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    // console.log(password);
    return result;
  }
}
