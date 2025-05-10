// app/match-jobs/page.tsx
"use client";

import { useState } from "react";

export default function MatchJobsPage() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("matchResume", file);

    const res = await fetch("http://localhost:10000/match-jobs", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setResult(data.result);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col items-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 flex items-center">
          <span className="mr-3">🔍</span> Job Matcher
        </h1>

        <input
          type="file"
          accept=".pdf,.txt"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="mb-4 w-full border border-gray-300 p-2 rounded-lg"
        />

        <button
          onClick={handleSubmit}
          disabled={loading || !file}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200 disabled:opacity-50"
        >
          {loading ? "Matching..." : "Match Jobs"}
        </button>

        {result && (
          <div className="mt-6 bg-gray-50 border border-gray-300 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Recommended Matches:</h2>
            <p className="text-gray-800 whitespace-pre-wrap">{result}</p>
          </div>
        )}
      </div>
    </main>
  );
}
