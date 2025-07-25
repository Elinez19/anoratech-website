"use client";

import { useRouter, useSearchParams } from "next/navigation";
import ResendVerificationForm from "@/components/auth/resend-verification-form";
import AuthLayout from "@/components/auth/auth-layout";
import { toast } from "sonner";

export default function ResendVerificationPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const handleResendSuccess = () => {
    router.push("/auth/verify-email?message=Verification email resent! Please check your inbox.");
  };

  const handleResendError = (error: string) => {
    toast.error(error);
  };

  return (
    <AuthLayout
      title="Resend Verification Email"
      subtitle="Didn't receive the verification email? Enter your email to resend it"
      alternateAction={{
        text: "Already verified?",
        link: "/auth/login",
        linkText: "Sign in here"
      }}
    >
      <ResendVerificationForm 
        email={email || undefined}
        onSuccess={handleResendSuccess} 
        onError={handleResendError} 
      />
    </AuthLayout>
  );
} 