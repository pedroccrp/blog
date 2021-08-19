import { UserData } from 'src/models/user';
import { ApiResponse } from 'src/types/base';

interface UserResponse extends ApiResponse {
  data?: UserResponseData;
}

interface UserResponseData extends UserData {}
