export interface ApiResponse {
  statusCode: number;
  data?: {};
}

export type ApiResponseError =
  | { type: 'database-error'; message: string }
  | { type: 'internal-error'; message: string }
  | { type: 'wrong-request'; message: string };
