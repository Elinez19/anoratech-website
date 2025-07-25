import { useMutation } from "@tanstack/react-query";
import { sendVerificationMutationFn } from "@/lib/api";
import { SendVerificationType } from "@/types/auth.types";
import { UseSendVerificationOptions } from "@/interfaces/auth.interfaces";

export function useSendVerification(options: UseSendVerificationOptions = {}) {
  const { onSuccess, onError } = options;

  const sendVerificationMutation = useMutation({
    mutationFn: sendVerificationMutationFn,
    onSuccess: () => {
      onSuccess?.();
    },
    onError: (error: unknown) => {
      const errorMessage = error instanceof Error ? error.message : "Failed to send verification email. Please try again.";
      onError?.(errorMessage);
    },
  });

  const sendVerification = (data: SendVerificationType) => {
    sendVerificationMutation.mutate(data);
  };

  return {
    sendVerification,
    isLoading: sendVerificationMutation.isPending,
    error: sendVerificationMutation.error,
    isSuccess: sendVerificationMutation.isSuccess,
  };
} 