import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-medium text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-[#f88e4c] text-white rounded-lg hover:bg-gray-900 transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
} 