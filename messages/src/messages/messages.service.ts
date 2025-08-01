import { MessagesRepository } from './messages.repository';

export class MessagesService {
  private messagesRepo: MessagesRepository;

  constructor() {
    // Service is creating its own dependencies
    // Don't do this on real apps!!
    this.messagesRepo = new MessagesRepository();
  }

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
