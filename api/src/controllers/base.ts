import { Request, Response } from 'express';
import { ApiReply } from 'src/types/base';

class BaseController {
  public static async getAll(req: Request, res: Response): Promise<void> {
    throw new Error('Not implemented!');
  }

  public static async getOne(req: Request, res: Response): Promise<void> {
    throw new Error('Not implemented!');
  }

  public static async create(req: Request, res: Response): Promise<void> {
    throw new Error('Not implemented!');
  }

  public static async update(req: Request, res: Response): Promise<void> {
    throw new Error('Not implemented!');
  }

  public static async delete(req: Request, res: Response): Promise<void> {
    throw new Error('Not implemented!');
  }

  protected static respondWith<T extends ApiReply>(res: Response, reply: T) {
    res.status(reply.statusCode).json(reply.data || {});
  }
}

export default BaseController;
