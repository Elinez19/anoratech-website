import { CurrentUserResponseType } from "@/types/auth.types";

export interface LoginFormProps {
  onSuccess?: (data: { token: string; user: { id: string; email: string; name: string } }) => void;
  onError?: (error: string) => void;
}

export interface RegisterFormProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export interface VerifyEmailFormProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
  token?: string;
}

export interface SendVerificationFormProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export interface ResendVerificationFormProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
  email?: string;
}

export interface ForgotPasswordFormProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export interface ResetPasswordFormProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
  token?: string;
}

export interface ProtectedRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export interface UseLoginOptions {
  onSuccess?: (data: { token: string; user: { id: string; email: string; name: string } }) => void;
  onError?: (error: string) => void;
}

export interface UseRegisterOptions {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export interface UseVerifyEmailOptions {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export interface UseSendVerificationOptions {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export interface UseResendVerificationOptions {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export interface UseForgotPasswordOptions {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export interface UseResetPasswordOptions {
  onSuccess?: () => void;
  onError?: (error: string) => void;
} 