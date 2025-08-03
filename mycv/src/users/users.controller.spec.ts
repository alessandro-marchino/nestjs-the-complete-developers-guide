import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { NotFoundException } from '@nestjs/common';

describe('UsersController', () => {
  let controller: UsersController;
  let fakeUsersService: Partial<UsersService>;
  let fakeAuthService: Partial<AuthService>;

  beforeEach(async () => {
    fakeUsersService = {
      findOne: async (id: number) => ({ id, email: 'asdf@asdf.com', password: 'asdf'} as User),
      find: async (email: string) => [ { id: 1, email, password: 'asdf'} as User ],
      // remove: () => {},
      // update: () => {}
    };
    fakeAuthService = {
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

  it('findAllUsers returns a list of users with the given email', async() => {
    const users = await controller.findAllUsers('asdf@asdf.com');
    expect(users.length).toEqual(1);
    expect(users[0].email).toEqual('asdf@asdf.com');
  });

  it('findUser returns a single user with a given id', async() => {
    const user = await controller.findUser('1');
    expect(user).toBeDefined();
  });

  it('findUser throws an error if user with given id is not found', async() => {
    fakeUsersService.findOne = async () => null;
    try {
      await controller.findUser('1');
    } catch(e) {
      expect(e).toBeInstanceOf(NotFoundException);
      return
    }
    throw new Error('Should not reach here')
  });
});
