import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FastServe | Fresh, Fast, Your Way",
  description: "Fresh, customizable meals built your way. Order online, pick up in 7 minutes, or get it delivered. Modern quick-casual dining with daily sourced ingredients.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
