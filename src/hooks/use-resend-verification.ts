import { useMutation } from "@tanstack/react-query";
import { resendVerificationMutationFn } from "@/lib/api";
import { ResendVerificationType } from "@/types/auth.types";
import { UseResendVerificationOptions } from "@/interfaces/auth.interfaces";

export function useResendVerification(options: UseResendVerificationOptions = {}) {
  const { onSuccess, onError } = options;

  const resendVerificationMutation = useMutation({
    mutationFn: resendVerificationMutationFn,
    onSuccess: () => {
      onSuccess?.();
    },
    onError: (error: unknown) => {
      const errorMessage = error instanceof Error ? error.message : "Failed to resend verification email. Please try again.";
      onError?.(errorMessage);
    },
  });

  const resendVerification = (data: ResendVerificationType) => {
    resendVerificationMutation.mutate(data);
  };

  return {
    resendVerification,
    isLoading: resendVerificationMutation.isPending,
    error: resendVerificationMutation.error,
    isSuccess: resendVerificationMutation.isSuccess,
  };
} 