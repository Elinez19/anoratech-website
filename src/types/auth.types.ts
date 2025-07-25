export interface LoginType {
  email: string;
  password: string;
}

export interface RegisterType {
  email: string;
  password: string;
  name: string;
}

export interface VerifyEmailType {
  token: string;
}

export interface SendVerificationType {
  email: string;
}

export interface ResendVerificationType {
  email: string;
}

export interface ForgotPasswordType {
  email: string;
}

export interface ResetPasswordType {
  token: string;
  password: string;
  confirmPassword: string;
}

export interface LoginResponseType {
  user: {
    id: string;
    email: string;
    name: string;
  };
  token: string;
}

export interface CurrentUserResponseType {
  id: string;
  email: string;
  name: string;
}

export interface VerificationResponseType {
  message: string;
}

export interface PasswordResetResponseType {
  message: string;
} 