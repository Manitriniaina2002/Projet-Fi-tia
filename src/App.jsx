import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden md:flex">
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold mb-4">Fi"ti — Candidate Number 1</h1>
          <p className="text-xl text-gray-700 mb-6">Slogan: <span className="font-semibold">Fi"tia dia ampy</span></p>
          <p className="text-gray-600">Join the movement to bring positive change and strong leadership. Replace the candidate image in <code>src/assets/candidate.svg</code> with an official photo.</p>
        </div>
        <div className="md:w-1/2 bg-sky-100 flex items-center justify-center p-6">
          <img src="/src/assets/candidate.svg" alt="Candidate Fi\"ti" className="max-w-xs" />
        </div>
      </div>
    </div>
  )
}
