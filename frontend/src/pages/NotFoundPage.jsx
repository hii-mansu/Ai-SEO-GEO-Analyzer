import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-950 px-6">

      <div className="max-w-xl text-center">

        <h1 className="text-8xl font-bold text-blue-500">
          404
        </h1>

        <h2 className="mt-6 text-4xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-400">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="mt-10 inline-flex rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700"
        >
          Back to Home
        </Link>

      </div>

    </section>
  );
}

export default NotFoundPage;