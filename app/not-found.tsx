export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-semibold">页面未找到</h1>
        <p className="mt-4 text-brand-gray-dark">抱歉，您访问的页面不存在或已被移动。</p>
      </div>
    </div>
  );
}
