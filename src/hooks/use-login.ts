import { useMutation } from "@tanstack/react-query";
import { loginMutationFn } from "@/lib/api";
import { LoginType } from "@/types/auth.types";
import { UseLoginOptions } from "@/interfaces/auth.interfaces";

export function useLogin(options: UseLoginOptions = {}) {
  const { onSuccess, onError } = options;

  const loginMutation = useMutation({
    mutationFn: loginMutationFn,
    onSuccess: (data) => {
      onSuccess?.(data);
    },
    onError: (error: unknown) => {
      const errorMessage = error instanceof Error ? error.message : "Login failed. Please try again.";
      onError?.(errorMessage);
    },
  });

  const login = (data: LoginType) => {
    loginMutation.mutate(data);
  };

  return {
    login,
    isLoading: loginMutation.isPending,
    error: loginMutation.error,
    isSuccess: loginMutation.isSuccess,
  };
} 