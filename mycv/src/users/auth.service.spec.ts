import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';
import { User } from './user.entity';

describe('AuthService', () => {
  // let service: AuthService;

  // beforeEach(async () => {
  //   const module: TestingModule = await Test.createTestingModule({
  //     providers: [AuthService],
  //   }).compile();

  //   service = module.get<AuthService>(AuthService);
  // });

  // it('should be defined', () => {
  //   expect(service).toBeDefined();
  // });

  it('can create an instance of auth service', async () => {
    // Create a fake copy of the users service
    const fakeUsersService: Partial<UsersService> = {
      find: () => Promise.resolve([]),
      create: (email: string, password: string) => Promise.resolve({ id: 1, email, password } as User)
    };

    const module = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: fakeUsersService }
      ]
    }).compile();
    const service = module.get(AuthService);
    expect(service).toBeDefined();
  });
});
