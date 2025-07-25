"use client";

import { useRouter, useSearchParams } from "next/navigation";
import VerifyEmailForm from "@/components/auth/verify-email-form";
import AuthLayout from "@/components/auth/auth-layout";
import { toast } from "sonner";

export default function VerifyEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const handleVerifySuccess = () => {
    router.push("/auth/login?message=Email verified successfully! Please log in.");
  };

  const handleVerifyError = (error: string) => {
    toast.error(error);
  };

  return (
    <AuthLayout
      title="Verify Your Email"
      subtitle="Please verify your email address to continue"
      alternateAction={{
        text: "Already verified?",
        link: "/auth/login",
        linkText: "Sign in here"
      }}
    >
      <VerifyEmailForm 
        token={token || undefined}
        onSuccess={handleVerifySuccess} 
        onError={handleVerifyError} 
      />
    </AuthLayout>
  );
} 