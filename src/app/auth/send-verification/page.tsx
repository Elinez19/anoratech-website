"use client";

import { useRouter } from "next/navigation";
import SendVerificationForm from "@/components/auth/send-verification-form";
import AuthLayout from "@/components/auth/auth-layout";
import { toast } from "sonner";

export default function SendVerificationPage() {
  const router = useRouter();

  const handleSendSuccess = () => {
    router.push("/auth/verify-email?message=Verification email sent! Please check your inbox.");
  };

  const handleSendError = (error: string) => {
    toast.error(error);
  };

  return (
    <AuthLayout
      title="Send Verification Email"
      subtitle="Enter your email to receive a verification code"
      alternateAction={{
        text: "Already have an account?",
        link: "/auth/login",
        linkText: "Sign in here"
      }}
    >
      <SendVerificationForm onSuccess={handleSendSuccess} onError={handleSendError} />
    </AuthLayout>
  );
} 