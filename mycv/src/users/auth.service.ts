import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';
import { compare, hash } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async signup(email: string, password: string) {
    // See if email is in use
    const users = await this.userService.find(email);
    if(users.length) {
      throw new BadRequestException('Email in use');
    }
    // Hash user password
    const hashedPassword = await hash(password, 10);

    // Create a new user and save it
    const user = await this.userService.create(email, hashedPassword);

    // Return the user
    return user;
  }

  async signin(email: string, password: string) {
    const [ user ] = await this.userService.find(email);
    if(!user) {
      throw new UnauthorizedException();
    }
    const passwordMatches = await compare(password, user.password);
    if(!passwordMatches) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
