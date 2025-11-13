'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-semibold">发生错误</h1>
        <p className="mt-4 text-brand-gray-dark">{error.message}</p>
        <button onClick={reset} className="mt-6 inline-block bg-brand-red text-brand-white font-semibold py-3 px-6 rounded-md">重试</button>
      </div>
    </div>
  );
}
