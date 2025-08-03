import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request, { Response } from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../src/app.module';
import { setupApp } from '../src/setup-app';

describe('Authentication Syste, (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('handles a signup request', () => {
    const signupEmail = 'asdf1@asdf.com';
    return request(app.getHttpServer())
      .post('/auth/signup')
      .send({ email: signupEmail, password: 'asdf' })
      .expect(201)
      .then((res: Response) => {
        const { id, email } = res.body;
        expect(id).toBeDefined();
        expect(email).toEqual(signupEmail)
      })
  });
});
