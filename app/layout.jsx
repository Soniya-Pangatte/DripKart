import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "DripKart",
  description: "Premium futuristic ecommerce experience built with Next.js, Tailwind CSS, and Framer Motion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cn("font-sans antialiased", geist.variable)}>
      <body className="min-h-screen bg-background text-foreground">{children}</body>
    </html>
  );
}