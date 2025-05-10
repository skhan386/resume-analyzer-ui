const BASE_URL = "https://resume-backend.onrender.com"; // 🔁 Replace with your actual Render URL

export async function rewriteBulletPoint(bullet: string): Promise<string> {
  const response = await fetch(`${BASE_URL}/rewrite-bullet`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ bullet }),
  });

  const data = await response.json();
  return data.result;
}

export async function analyzeResume(
  resume: string,
  job: string,
  language: string = "English"
): Promise<string> {
  const response = await fetch(`${BASE_URL}/analyze`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ resume, job, language }),
  });

  const data = await response.json();
  return data.result;
}

export async function matchJobs(resumeFile: File): Promise<string> {
  const formData = new FormData();
  formData.append("matchResume", resumeFile);

  const response = await fetch(`${BASE_URL}/match-jobs`, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  return data.result;
}
