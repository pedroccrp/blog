import { Request, Response } from 'express';

import { UserReply } from 'src/types/user';

import BaseController from 'src/controllers/base';

class UserController extends BaseController {
  public static async getAll(req: Request, res: Response) {
    this.respondWith<UserReply>(res, { statusCode: 200 });
  }

  public static async getOne(req: Request, res: Response) {
    this.respondWith<UserReply>(res, { statusCode: 200 });
  }

  public static async create(req: Request, res: Response) {
    this.respondWith<UserReply>(res, { statusCode: 200 });
  }

  public static async update(req: Request, res: Response) {
    this.respondWith<UserReply>(res, { statusCode: 200 });
  }

  public static async delete(req: Request, res: Response) {
    this.respondWith<UserReply>(res, { statusCode: 200 });
  }
}

export default UserController;
