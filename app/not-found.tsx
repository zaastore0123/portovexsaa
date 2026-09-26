import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-radial-glow px-6">
      <div className="text-center">
        <p className="font-display text-sm text-electric-400">404</p>
        <h1 className="mt-3 font-display text-3xl md:text-4xl font-bold text-ink-100">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-4 text-ink-300 max-w-sm mx-auto">
          The page you&apos;re looking for may have been moved or never
          existed.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-electric-500 px-6 py-3 text-sm font-medium text-white hover:bg-electric-400 transition-colors focus-ring"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
