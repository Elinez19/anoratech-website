"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import LoginForm from "@/components/auth/login-form";
import AuthLayout from "@/components/auth/auth-layout";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const handleLoginSuccess = (data: { token: string; user: { id: string; email: string; name: string } }) => {
    login(data.token, data.user);
    router.push("/dashboard");
  };

  const handleLoginError = (error: string) => {
    toast.error(error);
  };

  return (
    <AuthLayout
      title="Login to your account"
      subtitle="Enter your details to login."
      showGoogleLogin={true}
      showKeepMeLoggedIn={true}
      showForgotPassword={true}
      alternateAction={{
        text: "Don't have an account?",
        link: "/auth/register",
        linkText: "Register"
      }}
      isLogin={true}
    >
      <LoginForm onSuccess={handleLoginSuccess} onError={handleLoginError} />
    </AuthLayout>
  );
} 