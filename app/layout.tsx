// app/layout.tsx
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Resume Analyzer + AI Tools",
  description: "AI-powered resume enhancer and matcher",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 font-sans">
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold text-blue-700 hover:opacity-90 transition cursor-pointer">Resume AI Tools</h1>
            </Link>
            <nav className="space-x-2 sm:space-x-6 text-sm sm:text-base mt-2 sm:mt-0">
              <Link href="/analyze" className="text-gray-700 hover:text-blue-600 transition">Analyzer</Link>
              <Link href="/match-jobs" className="text-gray-700 hover:text-blue-600 transition">Matcher</Link>
              <Link href="/rewrite-bullet" className="text-gray-700 hover:text-blue-600 transition">Rewriter</Link>
            </nav>
          </div>
        </header>
        <main className="animate-fadeIn px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out">{children}</main>
      </body>
    </html>
  );
}
