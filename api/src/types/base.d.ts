export interface ApiResponse {
  statusCode: number;

  error: boolean;
  message?: string;

  data?: {};
}
