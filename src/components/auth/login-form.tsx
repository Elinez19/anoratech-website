"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLogin } from "@/hooks/use-login";
import { loginSchema, LoginFormData } from "@/schemas/auth.schemas";
import { LoginFormProps } from "@/interfaces/auth.interfaces";
import { toast } from "sonner";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function LoginForm({ onSuccess, onError }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const { login, isLoading } = useLogin({
    onSuccess: (data) => {
      toast.success("Login successful!");
      onSuccess?.(data);
    },
    onError: (errorMessage) => {
      toast.error(errorMessage);
      onError?.(errorMessage);
    },
  });

  const onSubmit = (data: LoginFormData) => {
    login(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email Address*</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            id="email"
            type="email"
            placeholder="hello@example.com"
            className={`pl-10 ${errors.email ? "border-red-500" : ""}`}
            {...register("email")}
          />
        </div>
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password*</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className={`pl-10 pr-10 ${errors.password ? "border-red-500" : ""}`}
            {...register("password")}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full bg-[#292E73] hover:bg-[#424798] text-white font-medium py-2 px-4 rounded-lg"
        disabled={isSubmitting || isLoading}
      >
        {isSubmitting || isLoading ? "Signing in..." : "Login"}
      </Button>
    </form>
  );
} 