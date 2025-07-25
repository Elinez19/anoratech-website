import { useMutation } from "@tanstack/react-query";
import { forgotPasswordMutationFn } from "@/lib/api";
import { ForgotPasswordType } from "@/types/auth.types";
import { UseForgotPasswordOptions } from "@/interfaces/auth.interfaces";

export function useForgotPassword(options: UseForgotPasswordOptions = {}) {
  const { onSuccess, onError } = options;

  const forgotPasswordMutation = useMutation({
    mutationFn: forgotPasswordMutationFn,
    onSuccess: () => {
      onSuccess?.();
    },
    onError: (error: unknown) => {
      const errorMessage = error instanceof Error ? error.message : "Failed to send password reset email. Please try again.";
      onError?.(errorMessage);
    },
  });

  const forgotPassword = (data: ForgotPasswordType) => {
    forgotPasswordMutation.mutate(data);
  };

  return {
    forgotPassword,
    isLoading: forgotPasswordMutation.isPending,
    error: forgotPasswordMutation.error,
    isSuccess: forgotPasswordMutation.isSuccess,
  };
} 