import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="section">
      <div className="container mx-auto text-center">
        <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Oops! The page you are looking for does not exist. It might have been moved or deleted.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/" className="btn btn-primary">
            Go to Homepage
          </Link>
          <Link href="/services" className="btn btn-secondary">
            View Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}