"use client";

import { useRouter } from "next/navigation";
import ForgotPasswordForm from "@/components/auth/forgot-password-form";
import AuthLayout from "@/components/auth/auth-layout";
import { toast } from "sonner";

export default function ForgotPasswordPage() {
  const router = useRouter();

  const handleForgotSuccess = () => {
    router.push("/auth/login?message=Password reset email sent! Please check your inbox.");
  };

  const handleForgotError = (error: string) => {
    toast.error(error);
  };

  return (
    <AuthLayout
      title="Forgot Password"
      subtitle="Enter your email to receive a password reset link"
      alternateAction={{
        text: "Remember your password?",
        link: "/auth/login",
        linkText: "Sign in here"
      }}
    >
      <ForgotPasswordForm onSuccess={handleForgotSuccess} onError={handleForgotError} />
    </AuthLayout>
  );
} 