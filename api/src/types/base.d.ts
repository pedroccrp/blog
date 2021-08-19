export interface ApiReply {
  statusCode: number;
  data?: {};
}

export type ApiReplyError =
  | { type: 'database-error'; message: string }
  | { type: 'internal-error'; message: string }
  | { type: 'wrong-request'; message: string };
