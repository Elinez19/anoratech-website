"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useVerifyEmail } from "@/hooks/use-verify-email";
import { verifyEmailSchema, VerifyEmailFormData } from "@/schemas/auth.schemas";
import { VerifyEmailFormProps } from "@/interfaces/auth.interfaces";
import { toast } from "sonner";
import { Key } from "lucide-react";

export default function VerifyEmailForm({ onSuccess, onError, token }: VerifyEmailFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<VerifyEmailFormData>({
    resolver: zodResolver(verifyEmailSchema),
    defaultValues: {
      token: token || "",
    },
  });

  const { verifyEmail, isLoading } = useVerifyEmail({
    onSuccess: () => {
      toast.success("Email verified successfully!");
      onSuccess?.();
    },
    onError: (errorMessage) => {
      toast.error(errorMessage);
      onError?.(errorMessage);
    },
  });

  const onSubmit = (data: VerifyEmailFormData) => {
    verifyEmail(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="token">Verification Code*</Label>
        <div className="relative">
          <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            id="token"
            type="text"
            placeholder="Enter verification code"
            className={`pl-10 ${errors.token ? "border-red-500" : ""}`}
            {...register("token")}
          />
        </div>
        {errors.token && (
          <p className="text-sm text-red-500">{errors.token.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full bg-[#292E73] hover:bg-[#424798] text-white font-medium py-2 px-4 rounded-lg"
        disabled={isSubmitting || isLoading}
      >
        {isSubmitting || isLoading ? "Verifying..." : "Verify Email"}
      </Button>
    </form>
  );
} 