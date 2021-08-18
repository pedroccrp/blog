import { Request, Response } from 'express';

class BaseController {
  public static getAll(req: Request, res: Response): void {
    throw new Error('Not implemented!');
  }
  public static getOne(req: Request, res: Response): void {
    throw new Error('Not implemented!');
  }

  public static create(req: Request, res: Response): void {
    throw new Error('Not implemented!');
  }

  public static update(req: Request, res: Response): void {
    throw new Error('Not implemented!');
  }
  public static delete(req: Request, res: Response): void {
    throw new Error('Not implemented!');
  }
}

export default BaseController;
