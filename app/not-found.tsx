import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas px-6 text-white">
      <div className="max-w-xl rounded-[2rem] border border-white/20 bg-white/10 p-10 text-center backdrop-blur">
        <p className="text-xs uppercase tracking-[0.3em] text-pine">404</p>
        <h1 className="mt-5 font-display text-4xl font-semibold">Page not found</h1>
        <p className="mt-4 text-base leading-8 text-white/70">
          The requested page is unavailable. Return to the main greenhouse presentation.
        </p>
        <Link
          href="/en"
          className="mt-8 inline-flex rounded-full bg-pine px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#6eab1e]"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  );
}
