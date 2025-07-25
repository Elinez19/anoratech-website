import { useMutation } from "@tanstack/react-query";
import { registerMutationFn } from "@/lib/api";
import { RegisterType } from "@/types/auth.types";
import { UseRegisterOptions } from "@/interfaces/auth.interfaces";

export function useRegister(options: UseRegisterOptions = {}) {
  const { onSuccess, onError } = options;

  const registerMutation = useMutation({
    mutationFn: registerMutationFn,
    onSuccess: () => {
      onSuccess?.();
    },
    onError: (error: unknown) => {
      const errorMessage = error instanceof Error ? error.message : "Registration failed. Please try again.";
      onError?.(errorMessage);
    },
  });

  const register = (data: RegisterType) => {
    registerMutation.mutate(data);
  };

  return {
    register,
    isLoading: registerMutation.isPending,
    error: registerMutation.error,
    isSuccess: registerMutation.isSuccess,
  };
} 