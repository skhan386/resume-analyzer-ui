// app/page.tsx
"use client";

import { useState } from "react";
import { rewriteBulletPoint } from "@/lib/api";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const rewritten = await rewriteBulletPoint(input);
    setResult(rewritten);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col items-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 flex items-center">
          <span className="mr-3">💼</span> Bullet Point Rewriter
        </h1>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste your bullet point..."
          className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg mb-4"
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200 disabled:opacity-50"
        >
          {loading ? "Rewriting..." : "Rewrite"}
        </button>

        {result && (
          <div className="mt-6 bg-gray-50 border border-gray-300 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Improved Bullet Point:</h2>
            <p className="text-gray-800 whitespace-pre-wrap">{result}</p>
          </div>
        )}
      </div>
    </main>
  );
}
