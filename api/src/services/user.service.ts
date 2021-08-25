import { UserData } from 'src/models/user.model';
import { UserReply } from 'src/types/user';

type ValidationResult = {
  isValid: boolean;
  reply?: UserReply;
};

const validateUser = (user: UserData): ValidationResult => {
  const result: ValidationResult = {
    isValid: true,
  };

  if (!validateEmail(user) || !validateName(user)) {
    result.isValid = false;
    result.reply = {
      statusCode: 400,
      data: {
        error: {
          type: 'wrong-request',
          message: 'Name or email are invalid or already in use.',
        },
      },
    };
  }

  if (!validateAuthToken(user)) {
    result.isValid = false;
    result.reply = {
      statusCode: 400,
      data: {
        error: {
          type: 'wrong-request',
          message: 'Authorization token is invalid.',
        },
      },
    };
  }

  return result;
};

const validateName = ({ name }: UserData): boolean => {
  return true;
};

const validateEmail = ({ email }: UserData): boolean => {
  return true;
};

const validateAuthToken = ({ auth0 }: UserData): boolean => {
  return true;
};

export default { validateUser };
