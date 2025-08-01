import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {

  constructor(private messagesRepo: MessagesRepository) {}

  async findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }
  async create(content: string) {
    return this.messagesRepo.create(content);
  }
  async findAll() {
    return this.messagesRepo.findAll();
  }
}
