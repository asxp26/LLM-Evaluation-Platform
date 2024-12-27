import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ModelMania",
  description: "Compare responses from multiple LLMs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} scroll-smooth`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
