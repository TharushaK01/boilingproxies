import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

// Configure Roboto as the primary font
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Boiling Proxies",
  description: "Empowering Businesses & Individuals with Boiling Proxies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body
        className={`${roboto.className} antialiased bg-[#050505] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
