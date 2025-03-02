import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-emerald-500 text-4xl font-bold">
        Jupiter Trading Platform
      </h1>
      <Link href="/dashboard">
        <button className="mt-6 px-6 py-3 bg-emerald-500 text-white rounded-lg text-lg">
          Go to Dashboard
        </button>
      </Link>
    </div>
  );
}
