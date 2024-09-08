import React from "react";
import { Link } from "react-router-dom";

function Pengumuman() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="animate-bounce mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-24 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 2L2 7h20L12 2zm0 20l10-5H2l10 5zM12 12l10-5v10l-10-5z"
          />
        </svg>
      </div>
      <h1 className="text-4xl font-bold text-gray-800">404 - Not Found</h1>
      <p className="mt-4 text-lg text-gray-600">
        Halaman yang Anda cari tidak ditemukan.
      </p>
      <Link to="/" className="mt-6 text-blue-600 hover:underline">
        Kembali ke Beranda
      </Link>
    </div>
  );
}

export default Pengumuman;
