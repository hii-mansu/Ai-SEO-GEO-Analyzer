const signupTemplate = (name) => {
  return `
    <div style="max-width:600px;margin:auto;padding:30px;font-family:Arial,sans-serif;background:#f8fafc;border-radius:8px;">

      <h1 style="color:#111827;">
        Welcome to SEO GEO Analyzer 🚀
      </h1>

      <p>Hi <strong>${name}</strong>,</p>

      <p>
        Thank you for creating your account. We're excited to have you on board.
      </p>

      <p>
        You can now start analyzing websites for:
      </p>

      <ul>
        <li>SEO Optimization</li>
        <li>Generative Engine Optimization (GEO)</li>
        <li>Answer Engine Optimization (AEO)</li>
        <li>AI Readiness</li>
      </ul>

      <a
        href="http://localhost:5173/dashboard"
        style="
          display:inline-block;
          margin-top:20px;
          padding:12px 24px;
          background:#2563eb;
          color:#ffffff;
          text-decoration:none;
          border-radius:6px;
        "
      >
        Go to Dashboard
      </a>

      <hr style="margin:30px 0;">

      <p style="font-size:13px;color:#6b7280;">
        If you have any questions, simply reply to this email.
      </p>

      <p style="font-size:13px;color:#6b7280;">
        Happy Analyzing! 🚀
      </p>

      <p>
        Team SEO GEO Analyzer
      </p>

    </div>
  `;
};

export default signupTemplate;