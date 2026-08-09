import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Abdul Muqeet Armar — Software Engineer | AI Researcher",
    template: "%s — Abdul Muqeet Armar",
  },
  description:
    "Software Engineer, AI & Machine Learning Engineer, and Blockchain Researcher. Building intelligent, scalable and secure software solutions combining AI, Blockchain and Modern Web Technologies.",
  keywords: [
    "Abdul Muqeet Armar",
    "Software Engineer",
    "AI Engineer",
    "Machine Learning",
    "Blockchain Researcher",
    "Full Stack Developer",
    "Portfolio",
  ],
  authors: [{ name: "Abdul Muqeet Armar" }],
  creator: "Abdul Muqeet Armar",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Abdul Muqeet Armar — Software Engineer | AI Researcher",
    description:
      "Software Engineer, AI & Machine Learning Engineer, and Blockchain Researcher. Building intelligent, scalable and secure software solutions.",
    siteName: "Abdul Muqeet Armar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Muqeet Armar — Software Engineer | AI Researcher",
    description:
      "Software Engineer, AI & Machine Learning Engineer, and Blockchain Researcher.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
