import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async create(email: string, password: string) {
    const hashedPassword = await hash(password, 10);
    const user = this.repo.create({ email, password: hashedPassword });
    return this.repo.save(user);
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }
  async find(email: string) {
    return this.repo.findBy({ email });
  }
  async update() {}
  async remove() {}
}
