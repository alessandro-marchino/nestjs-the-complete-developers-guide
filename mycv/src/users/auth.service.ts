import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { hash } from 'bcrypt';

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
    // Return the user
  }

  signin() {}
}
