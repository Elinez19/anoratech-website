import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/query-provider";
import { Toaster } from "sonner";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AnoraTech - Best Software Development Company",
  description: "AnoraTech is a software development company that provides a wide range of services to businesses of all sizes.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased`}
      >
        <QueryProvider>
          <ReactQueryDevtools initialIsOpen={false} />
          <Toaster position="top-right" richColors={true} />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
