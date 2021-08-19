import { UserData } from 'src/models/user';
import { ApiResponse, ApiResponseError } from 'src/types/base';

interface UserResponse extends ApiResponse {
  data?: UserResponseData;
}

interface UserResponseData {
  error?: UserResponseError;
  user?: UserData;
}

type UserResponseError = ApiResponseError;
