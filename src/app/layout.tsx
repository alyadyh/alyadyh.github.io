import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alya Dhiya's Portfolio",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
