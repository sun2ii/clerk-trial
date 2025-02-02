import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  ClerkProvider,
} from "@clerk/nextjs"
import '@/styles/globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Clerk App",
  description: "Clerk App using Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
