import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { User } from './user.entity';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const fakeUsersService: Partial<UsersService> = {
      findOne: async (id: number) => ({ id, email: 'asdf@asdf.com', password: 'asdf'} as User),
      find: async (email: string) => [ { id: 1, email, password: 'asdf'} as User ],
      // remove: () => {},
      // update: () => {}
    };
    const fakeAuthService: Partial<AuthService> = {
      // signup: (email: string, password: string) => {},
      // signin: (email: string, password: string) => {}
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        { provide: UsersService, useValue: fakeUsersService },
        { provide: AuthService, useValue: fakeAuthService }
      ]
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
