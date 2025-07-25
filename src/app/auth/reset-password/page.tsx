"use client";

import { useRouter, useSearchParams } from "next/navigation";
import ResetPasswordForm from "@/components/auth/reset-password-form";
import AuthLayout from "@/components/auth/auth-layout";
import { toast } from "sonner";
import Link from "next/link";

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const handleResetSuccess = () => {
    router.push("/auth/login?message=Password reset successfully! Please log in with your new password.");
  };

  const handleResetError = (error: string) => {
    toast.error(error);
  };

  if (!token) {
    return (
      <AuthLayout
        title="Invalid Reset Link"
        subtitle="The password reset link is invalid or has expired."
        alternateAction={{
          text: "",
          link: "/auth/forgot-password",
          linkText: "Request a new password reset"
        }}
      >
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Please request a new password reset link to continue.
          </p>
          <Link
            href="/auth/forgot-password"
            className="text-blue-600 hover:text-blue-500 font-medium"
          >
            Request a new password reset
          </Link>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Enter your new password below"
      alternateAction={{
        text: "Remember your password?",
        link: "/auth/login",
        linkText: "Sign in here"
      }}
    >
      <ResetPasswordForm 
        token={token}
        onSuccess={handleResetSuccess} 
        onError={handleResetError} 
      />
    </AuthLayout>
  );
} 