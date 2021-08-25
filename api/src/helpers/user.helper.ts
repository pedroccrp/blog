import { Request, Response } from 'express';

import { UserData } from 'src/models/user.model';
import { ApiReply } from 'src/types/base';

const extractUserFromRequest = (req: Request): UserData => {
  const user: UserData = req.body.user;

  return {
    auth0: user.auth0,
    email: user.email,
    name: user.name,
    avatar: user.avatar,
  };
};

const respondWith = <T extends ApiReply>(res: Response, reply: T) => {
  res.status(reply.statusCode).json(reply.data || {});
};

export default { extractUserFromRequest, respondWith };
