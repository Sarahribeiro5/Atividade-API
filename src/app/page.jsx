"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'

export default function Page() {
  const [personagens, setPersonagens] = useState([])
  const [loading, setLoading] = useState(false)

  const buscarPersonagens = async () => {
    setLoading(true)
    try {
      const response = await axios.get('http://localhost:5000/personagens') // Altere o endpoint conforme necessário
      const data = response.data;
      setPersonagens(data)
      console.table(data)
    } catch (error) {
      console.error('Erro ao buscar personagens:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-blue-100 p-8 text-center">
      {/* Informações obrigatórias */}
      <div className="mb-12">
        <h1 className="text-4xl mb-4">Turma: 2TDS2</h1>
        <h2 className="text-2xl mb-2">Escola: SENAI Valinhos</h2>
        <h3 className="text-xl mb-4">Aluno: Sarah Ribeiro Barros</h3>
        <div className="flex justify-center mb-4">
          <Image
            src="/avatar.jpg"
            alt="Foto do Aluno"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <p className="italic text-lg">"O sucesso é a soma de pequenos esforços repetidos dia após dia." - Robert Collier</p>
      </div>

      {/* Botão para buscar personagens */}
      <div className="text-center mb-12">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={buscarPersonagens} disabled={loading}>
          {loading ? "Carregando..." : "Buscar Personagens"}
        </button>
      </div>

      <Link href="./Lista">Lista</Link>

      {/* Lista de personagens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {personagens.map((personagem) => (
          <div className="bg-white p-6 rounded-lg shadow-md" key={personagem.id}>
            <h3 className="font-bold text-lg text-gray-800">{personagem.nome}</h3>
            <p className="text-gray-600">Idade: {personagem.idade}</p>
            <p className="text-gray-600">Características: {personagem.características}</p>
          </div>
        ))}
      </div>
    </div>
  )
}