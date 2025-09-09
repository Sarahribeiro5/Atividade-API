"use client";

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-red-100 flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-5xl font-bold text-red-600 mb-4">Página não encontrada 😢</h1>
      <p className="text-lg text-gray-700 mb-8">
        O conteúdo que você está procurando não existe ou foi removido.
      </p>
      <Link href="/" className="bg-blue-500 text-white px-6 py-3 rounded text-lg hover:bg-blue-600">
        Voltar para a Home
      </Link>
    </div>
  );
}