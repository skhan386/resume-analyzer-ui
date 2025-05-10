"use client";

import { useState } from "react";

export default function Analyze() {
  const [job, setJob] = useState("");
  const [resumeText, setResumeText] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [language, setLanguage] = useState("English");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("job", job);
    formData.append("language", language);
    if (resumeFile) {
      formData.append("resumeFile", resumeFile);
    } else {
      formData.append("resume", resumeText);
    }

    setLoading(true);
    const response = await fetch("http://localhost:10000/analyze", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.result);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col items-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 flex items-center">
          <span className="mr-3">📋</span> Resume Analyzer
        </h1>

        <textarea
          placeholder="Paste the job description..."
          value={job}
          onChange={(e) => setJob(e.target.value)}
          className="w-full h-28 p-4 border border-gray-300 rounded-lg mb-4 text-lg"
        />

        <textarea
          placeholder="Paste your resume..."
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
          className="w-full h-28 p-4 border border-gray-300 rounded-lg mb-4 text-lg"
        />

        <label className="block mb-4 text-sm font-medium text-gray-700">
          Or upload resume (.pdf or .txt):
        </label>
        <input
          type="file"
          accept=".pdf,.txt"
          onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
          className="mb-4 block w-full text-sm text-gray-700 border border-gray-300 rounded-lg p-2"
        />

        <label className="block mb-2 text-sm font-medium text-gray-700">
          Choose output language:
        </label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full mb-6 border border-gray-300 p-2 rounded-lg"
        >
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
          <option>German</option>
          <option>Urdu</option>
        </select>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200 disabled:opacity-50"
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>

        {result && (
          <div className="mt-6 bg-gray-50 border border-gray-300 rounded-lg p-4 whitespace-pre-wrap">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Result:</h2>
            <p className="text-gray-800">{result}</p>
          </div>
        )}
      </div>
    </main>
  );
}
