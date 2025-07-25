import API from "./axios-client";
import { 
  LoginType, 
  RegisterType, 
  VerifyEmailType, 
  SendVerificationType, 
  ResendVerificationType, 
  ForgotPasswordType, 
  ResetPasswordType,
  LoginResponseType,
  CurrentUserResponseType,
  VerificationResponseType,
  PasswordResetResponseType
} from "@/types/auth.types";

export const loginMutationFn = async (
  data: LoginType
): Promise<LoginResponseType> => {
  const response = await API.post("/auth/login", data);
  return response.data;
};

export const registerMutationFn = async (data: RegisterType): Promise<VerificationResponseType> => {
  const response = await API.post("/auth/register", data);
  return response.data;
};

export const verifyEmailMutationFn = async (data: VerifyEmailType): Promise<VerificationResponseType> => {
  const response = await API.post("/auth/verify-email", data);
  return response.data;
};

export const sendVerificationMutationFn = async (data: SendVerificationType): Promise<VerificationResponseType> => {
  const response = await API.post("/auth/send-verification", data);
  return response.data;
};

export const resendVerificationMutationFn = async (data: ResendVerificationType): Promise<VerificationResponseType> => {
  const response = await API.post("/auth/resend-verification", data);
  return response.data;
};

export const forgotPasswordMutationFn = async (data: ForgotPasswordType): Promise<PasswordResetResponseType> => {
  const response = await API.post("/auth/forgot-password", data);
  return response.data;
};

export const resetPasswordMutationFn = async (data: ResetPasswordType): Promise<PasswordResetResponseType> => {
  const response = await API.post("/auth/reset-password", data);
  return response.data;
};

export const logoutMutationFn = async () => await API.post("/auth/logout");

export const getCurrentUserQueryFn =
  async (): Promise<CurrentUserResponseType> => {
    const response = await API.get(`/user/current`);
    return response.data;
  };

