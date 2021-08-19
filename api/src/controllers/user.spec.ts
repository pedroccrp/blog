import { getMockReq, getMockRes } from '@jest-mock/express';
import { any } from 'joi';

import UserController from 'src/controllers/user';

import database from 'src/database-local';

const { res, clearMockRes } = getMockRes();

beforeEach(async () => clearMockRes());
beforeAll(async () => await database.connect());
afterAll(async () => await database.close());

describe('User controller', () => {
  describe('GET', () => {
    test('should return all users', async () => {
      const req = getMockReq();

      await UserController.getAll(req, res);

      expect(res.status).lastCalledWith(200);
      expect(res.json).lastCalledWith({
        users: expect.any(any),
      });
    });
  });
});
