import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const fakeUsersService: Partial<UsersService> = {
      // findOne: () => {},
      // find: () => {},
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
