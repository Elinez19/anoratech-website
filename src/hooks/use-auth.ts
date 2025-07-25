"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCurrentUserQueryFn, logoutMutationFn } from "@/lib/api";
import { CurrentUserResponseType } from "@/types/auth.types";
import { toast } from "sonner";
import { useEffect, useState } from "react";

export function useAuth() {
  const queryClient = useQueryClient();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const {
    data: user,
    isLoading,
    refetch: refetchUser,
  } = useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUserQueryFn,
    enabled: isClient && !!localStorage.getItem("token"),
    retry: false,
  });

  const logoutMutation = useMutation({
    mutationFn: logoutMutationFn,
    onSuccess: () => {
      if (isClient) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
      queryClient.clear();
      toast.success("Logged out successfully!");
    },
    onError: () => {
      toast.error("Failed to logout. Please try again.");
    },
  });

  const isAuthenticated = isClient && !!localStorage.getItem("token") && !!user;

  const login = (token: string, userData: CurrentUserResponseType) => {
    if (isClient) {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userData));
    }
    queryClient.setQueryData(["currentUser"], userData);
  };

  const logout = () => {
    logoutMutation.mutate();
  };

  return {
    user: user || null,
    isLoading: !isClient || isLoading,
    isAuthenticated,
    login,
    logout,
    refetchUser,
  };
} 