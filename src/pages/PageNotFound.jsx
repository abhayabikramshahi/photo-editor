import React from 'react';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-6xl font-extrabold text-red-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-8">Oops! Page Not Found</p>

      <div className="flex space-x-4">
        <button
          onClick={() => navigate('/')}
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          Go Home
        </button>

        <button
          onClick={() => navigate('/about')}
          className="bg-white border border-red-600 text-red-600 px-6 py-2 rounded-lg hover:bg-red-50 transition-colors"
        >
          About Developer
        </button>
      </div>
    </main>
  );
}

export default PageNotFound;
