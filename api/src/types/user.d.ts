import { UserData } from 'src/models/user';
import { ApiReply, ApiReplyError } from 'src/types/base';

interface UserReply extends ApiReply {
  data?: UserReplyData;
}

interface UserReplyData {
  error?: UserReplyError;
  user?: UserData;
  users?: UserData[];
}

type UserReplyError = ApiReplyError;
