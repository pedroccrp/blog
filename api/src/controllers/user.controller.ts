import { Request, Response } from 'express';

import { Controller } from 'src/types/controller';

import userHelper from 'src/helpers/user.helper';

const userController: Controller = {
  getAll: async (req: Request, res: Response) => {
    userHelper.respondWith(res, { statusCode: 200 });
  },

  getOne: async (req: Request, res: Response) => {
    userHelper.respondWith(res, { statusCode: 200 });
  },

  create: async (req: Request, res: Response) => {
    userHelper.respondWith(res, { statusCode: 200 });
  },

  update: async (req: Request, res: Response) => {
    userHelper.respondWith(res, { statusCode: 200 });
  },

  delete: async (req: Request, res: Response) => {
    userHelper.respondWith(res, { statusCode: 200 });
  },
};

export default userController;
