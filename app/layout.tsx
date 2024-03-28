import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tollbit - Build on realtime data",
  description: "Build on Tollbit and go directly to the data source.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
