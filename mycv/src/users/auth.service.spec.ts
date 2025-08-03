import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';
import { User } from './user.entity';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    // Create a fake copy of the users service
    const fakeUsersService: Partial<UsersService> = {
      find: () => Promise.resolve([]),
      create: (email: string, password: string) => Promise.resolve({ id: 1, email, password } as User)
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: fakeUsersService }
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('creates a new user with a salted and hashed password', async () => {
    const user = await service.signup('asdf@asdf.com', 'asdf');
    expect(user.password).not.toEqual('asdf');
    const [ _, algo, rounds, data ] = user.password.split('$');
    expect(algo).toEqual('2b');
    expect(rounds).toEqual('10');
    const [ salt, hash ] = data.split(/\./);
    expect(salt).toBeDefined();
    expect(hash).toBeDefined();
  });

});
