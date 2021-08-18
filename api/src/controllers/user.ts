import { Request, Response } from 'express';

import BaseController from 'src/controllers/base';

class UserController extends BaseController {
  public static getAll(req: Request, res: Response) {
    res.json({});
  }

  public static getOne(req: Request, res: Response) {
    res.json({});
  }

  public static create(req: Request, res: Response) {
    res.json({});
  }

  public static update(req: Request, res: Response) {
    res.json({});
  }

  public static delete(req: Request, res: Response) {
    res.json({});
  }
}

export default UserController;
