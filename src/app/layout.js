import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "InstaGlow AI",
  description:
    "AI-powered Instagram content creation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Providers>
          {/* Main content of the page */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
