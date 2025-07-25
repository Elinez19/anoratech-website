"use client";

import { useRouter } from "next/navigation";
import RegisterForm from "@/components/auth/register-form";
import AuthLayout from "@/components/auth/auth-layout";
import { toast } from "sonner";

export default function RegisterPage() {
  const router = useRouter();

  const handleRegisterSuccess = () => {
    router.push("/auth/login?message=Registration successful! Please log in.");
  };

  const handleRegisterError = (error: string) => {
    toast.error(error);
  };

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Join us and get started today"
      showGoogleLogin={true}
      alternateAction={{
        text: "Already have an account?",
        link: "/auth/login",
        linkText: "Login"
      }}
    >
      <RegisterForm onSuccess={handleRegisterSuccess} onError={handleRegisterError} />
    </AuthLayout>
  );
} 