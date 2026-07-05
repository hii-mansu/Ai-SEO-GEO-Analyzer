const resetPasswordTemplate = (resetLink) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px;">
      <h2>Reset Your Password</h2>

      <p>We received a request to reset your password.</p>

      <p>Click the button below to continue.</p>

      <a
        href="${resetLink}"
        style="
          display:inline-block;
          padding:12px 24px;
          background:#2563eb;
          color:#ffffff;
          text-decoration:none;
          border-radius:6px;
        "
      >
        Reset Password
      </a>

      <p style="margin-top:20px;">
        This link will expire in <strong>15 minutes</strong>.
      </p>

      <p>
        If you didn't request this, you can safely ignore this email.
      </p>

      <hr />

      <p style="font-size:13px;color:#666;">
        If the button doesn't work, copy and paste this link into your browser:
      </p>

      <p>${resetLink}</p>
    </div>
  `;
};

export default resetPasswordTemplate;