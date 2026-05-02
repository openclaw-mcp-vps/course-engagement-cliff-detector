import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Course Engagement Cliff Detector – Spot When Students Drop Off",
  description: "Analyze video watch time, quiz scores, and forum activity to identify the exact moment students disengage from your online course."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="66df7fae-dade-4fd2-9f7a-4002177c62c7"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
