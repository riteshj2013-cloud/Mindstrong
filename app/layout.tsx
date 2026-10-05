import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito } from "next/font/google";
import { MotionPref } from "@/components/ui/MotionPref";
import { ChunkReload } from "@/components/ui/ChunkReload";
import "./globals.css";

const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"] });
const fredoka = Fredoka({ variable: "--font-fredoka", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mindstrong — Think hard. Stay brave.",
  description:
    "Daily practice (reasoning, maths, spelling) and olympiad-style test prep for ages 6–15.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fffaf0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${nunito.variable} ${fredoka.variable} h-full antialiased`}>
      <head>
        <ChunkReload />
      </head>
      <body className="min-h-full">
        <MotionPref />
        <div className="mx-auto flex min-h-dvh w-full max-w-lg flex-col px-4 pb-8 pt-4">
          {children}
        </div>
      </body>
    </html>
  );
}
