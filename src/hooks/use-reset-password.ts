import { useMutation } from "@tanstack/react-query";
import { resetPasswordMutationFn } from "@/lib/api";
import { ResetPasswordType } from "@/types/auth.types";
import { UseResetPasswordOptions } from "@/interfaces/auth.interfaces";

export function useResetPassword(options: UseResetPasswordOptions = {}) {
  const { onSuccess, onError } = options;

  const resetPasswordMutation = useMutation({
    mutationFn: resetPasswordMutationFn,
    onSuccess: () => {
      onSuccess?.();
    },
    onError: (error: unknown) => {
      const errorMessage = error instanceof Error ? error.message : "Failed to reset password. Please try again.";
      onError?.(errorMessage);
    },
  });

  const resetPassword = (data: ResetPasswordType) => {
    resetPasswordMutation.mutate(data);
  };

  return {
    resetPassword,
    isLoading: resetPasswordMutation.isPending,
    error: resetPasswordMutation.error,
    isSuccess: resetPasswordMutation.isSuccess,
  };
} 