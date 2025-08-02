import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: number) {
    return this.repo.findOneBy({ id });
  }
  async find(email: string) {
    return this.repo.findBy({ email });
  }
  async update(id: number, attr: Omit<Partial<User>, 'id'>) {
    const user = await this.findOne(id);
    if(!user) {
      throw new NotFoundException('user not found');
    }
    if(attr.password) {
      attr.password = await hash(attr.password, 10)
    }
    Object.assign(user, attr);
    return this.repo.save(user);
  }
  async remove(id: number ) {
    const user = await this.findOne(id);
    if(!user) {
      throw new NotFoundException('user not found');
    }
    return this.repo.remove(user);
  }
}
