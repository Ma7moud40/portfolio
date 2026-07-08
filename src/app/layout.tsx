import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { profile } from "@/data/profile";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mahmoud-adel.dev"),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s · ${profile.shortName}`,
  },
  description: profile.summary,
  authors: [{ name: profile.name }],
  keywords: [
    "Embedded Systems",
    "Engineer",
    "PCB Design",
    "Microcontroller",
    "Firmware",
    "Robotics",
    "Mahmoud Adel",
    "Comet Lab",
    "Egypt",
  ],
  openGraph: {
    type: "website",
    title: `${profile.name} — ${profile.title}`,
    description: profile.summary,
    siteName: profile.shortName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: profile.summary,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans`}
      >
        {/* Animated glass background blobs */}
        <div className="glass-bg-blobs" aria-hidden />
        <div className="glass-bg-blob-extra" aria-hidden />
        {children}
        <Toaster
          position="bottom-center"
          theme="dark"
          toastOptions={{
            style: {
              background: "rgba(255, 255, 255, 0.06)",
              backdropFilter: "blur(24px) saturate(200%)",
              WebkitBackdropFilter: "blur(24px) saturate(200%)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.06)",
              color: "hsl(213 31% 91%)",
            },
          }}
        />
      </body>
    </html>
  );
}
