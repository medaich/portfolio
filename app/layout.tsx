import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { ThemeProvider } from "next-themes";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`antialiased ${outfit.variable} ${ovo.variable} scroll-smooth `}
      suppressHydrationWarning
    >
      <body className="font-outfit text-gray-800 bg-gray-50 dark:bg-gray-900 dark:text-gray-100 transition-all duration-300 ease-in-out">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          <Header />
          {children}

          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
