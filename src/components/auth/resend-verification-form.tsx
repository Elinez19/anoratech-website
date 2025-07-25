"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useResendVerification } from "@/hooks/use-resend-verification";
import { resendVerificationSchema, ResendVerificationFormData } from "@/schemas/auth.schemas";
import { ResendVerificationFormProps } from "@/interfaces/auth.interfaces";
import { toast } from "sonner";
import { Mail } from "lucide-react";

export default function ResendVerificationForm({ onSuccess, onError, email }: ResendVerificationFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResendVerificationFormData>({
    resolver: zodResolver(resendVerificationSchema),
    defaultValues: {
      email: email || "",
    },
  });

  const { resendVerification, isLoading } = useResendVerification({
    onSuccess: () => {
      toast.success("Verification email resent successfully!");
      onSuccess?.();
    },
    onError: (errorMessage) => {
      toast.error(errorMessage);
      onError?.(errorMessage);
    },
  });

  const onSubmit = (data: ResendVerificationFormData) => {
    resendVerification(data);
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

      <Button
        type="submit"
        className="w-full bg-[#292E73] hover:bg-[#424798] text-white font-medium py-2 px-4 rounded-lg"
        disabled={isSubmitting || isLoading}
      >
        {isSubmitting || isLoading ? "Resending..." : "Resend Verification Email"}
      </Button>
    </form>
  );
} 