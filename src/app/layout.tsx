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
        {children}
        <Toaster
          position="bottom-center"
          theme="dark"
          toastOptions={{
            style: {
              background: "hsl(222 47% 8%)",
              border: "1px solid hsl(188 95% 53% / 0.4)",
              color: "hsl(213 31% 91%)",
            },
          }}
        />
      </body>
    </html>
  );
}
