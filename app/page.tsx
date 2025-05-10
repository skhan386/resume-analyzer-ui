// app/page.tsx
"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">Welcome to Resume AI Tools</h2>
      <p className="text-gray-600 max-w-xl mb-8 px-4">
        Elevate your job applications with AI-powered tools designed to enhance resumes, match you to jobs, and refine bullet points.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/analyze">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition">
            Analyze Resume
          </button>
        </Link>
        <Link href="/match-jobs">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition">
            Match Jobs
          </button>
        </Link>
        <Link href="/rewrite-bullet">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition">
            Rewrite Bullet
          </button>
        </Link>
      </div>
    </div>
  );
}
