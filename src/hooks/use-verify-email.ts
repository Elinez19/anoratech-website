import { useMutation } from "@tanstack/react-query";
import { verifyEmailMutationFn } from "@/lib/api";
import { VerifyEmailType } from "@/types/auth.types";
import { UseVerifyEmailOptions } from "@/interfaces/auth.interfaces";

export function useVerifyEmail(options: UseVerifyEmailOptions = {}) {
  const { onSuccess, onError } = options;

  const verifyEmailMutation = useMutation({
    mutationFn: verifyEmailMutationFn,
    onSuccess: () => {
      onSuccess?.();
    },
    onError: (error: unknown) => {
      const errorMessage = error instanceof Error ? error.message : "Email verification failed. Please try again.";
      onError?.(errorMessage);
    },
  });

  const verifyEmail = (data: VerifyEmailType) => {
    verifyEmailMutation.mutate(data);
  };

  return {
    verifyEmail,
    isLoading: verifyEmailMutation.isPending,
    error: verifyEmailMutation.error,
    isSuccess: verifyEmailMutation.isSuccess,
  };
} 