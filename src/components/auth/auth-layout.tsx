"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Mail, Phone, User } from "lucide-react";
import Logo from "@/components/ui/logo";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  showGoogleLogin?: boolean;
  showKeepMeLoggedIn?: boolean;
  showForgotPassword?: boolean;
  alternateAction?: {
    text: string;
    link: string;
    linkText: string;
  };
  isLogin?: boolean;
}

export default function AuthLayout({
  children,
  title,
  subtitle,
  showGoogleLogin = false,
  showKeepMeLoggedIn = false,
  showForgotPassword = false,
  alternateAction,
  isLogin = false,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="flex w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Left Column - Auth Form Card */}
        <Card className="flex-1 border-0 shadow-none rounded-none">
          <CardContent className="p-8">
            <div className="w-full max-w-md mx-auto space-y-8">
              {/* Header with Register/Login toggle */}
              <div className="flex justify-between items-center">
                <Logo size="md" />
                {alternateAction && (
                  <div className="text-sm text-gray-600">
                    {alternateAction.text}{" "}
                    <Link href={alternateAction.link}>
                      <Button variant="outline" size="sm" className="ml-2">
                        {alternateAction.linkText}
                      </Button>
                    </Link>
                  </div>
                )}
              </div>

              {/* Avatar */}
              <div className="flex justify-center">
                <Avatar className="w-16 h-16">
                  <AvatarFallback>
                    <User className="w-8 h-8" />
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* Title and Subtitle */}
              <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
                <p className="text-sm text-gray-600 mt-2">{subtitle}</p>
              </div>

              {/* Google Login Button */}
              {showGoogleLogin && (
                <div className="space-y-4">
                  <Button variant="outline" className="w-full" size="lg">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Continue with Google
                  </Button>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator className="w-full" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-gray-500">OR</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Form */}
              <div className="space-y-4">
                {children}
              </div>

              {/* Keep me logged in and Forgot password */}
              {(showKeepMeLoggedIn || showForgotPassword) && (
                <div className="flex items-center justify-between">
                  {showKeepMeLoggedIn && (
                    <div className="flex items-center space-x-2">
                      <Checkbox id="keep-logged-in" />
                      <label htmlFor="keep-logged-in" className="text-sm text-gray-600">
                        Keep me logged in
                      </label>
                    </div>
                  )}
                  {showForgotPassword && (
                    <Link
                      href="/auth/forgot-password"
                      className="text-sm text-[#292E73] hover:text-[#424798]"
                    >
                      Forgot password?
                    </Link>
                  )}
                </div>
              )}

              {/* Footer */}
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>© 2025 Anoratech</span>
                <div className="flex items-center space-x-1">
                  <Globe className="w-3 h-3" />
                  <span>ENG</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Right Column - Branding Card */}
        <Card className="hidden lg:flex lg:w-1/2 border-0 shadow-none rounded-none bg-gradient-to-br from-[#292E73] to-[#424798] relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-lg blur-xl"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-[#5F67C6]/20 rounded-lg blur-xl"></div>
            <div className="absolute bottom-20 left-40 w-28 h-28 bg-[#424798]/20 rounded-lg blur-xl"></div>
            <div className="absolute bottom-40 right-40 w-20 h-20 bg-white/10 rounded-lg blur-xl"></div>
          </div>

          <CardContent className="relative z-10 flex flex-col justify-between h-full p-12 text-white">
            {/* Top section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Logo size="md" variant="white" />
                <span className="text-xl font-bold">ANORATECH</span>
              </div>
              <p className="text-lg opacity-90">Building the future has never been easier.</p>
            </div>

            {/* Middle section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">Get Access</h2>
                <p className="opacity-90">Sign up at anoratech.com to start using the platform.</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Questions?</h2>
                <div className="space-y-2 opacity-90">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>Reach us at info@anoratech.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>Call +1 (555) 123-4567</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 