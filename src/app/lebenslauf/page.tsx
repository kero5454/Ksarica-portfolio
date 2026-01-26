// app/lebenslauf/page.tsx
import React from 'react';

export default function LebenslaufPage() {
  return (
    <main className="bg-white min-h-screen p-8">
      
      
      <h1 className="text-3xl font-bold mb-4">Mein Lebenslauf</h1>
      <p>Hier kannst du deinen Lebenslauf als HTML bauen oder ein PDF einbinden.</p>
      
      {/* Beispiel Button zum Download (falls du ein PDF in 'public' hast) */}
      <a 
        href="/mein-cv.pdf" 
        className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded"
        target="_blank"
      >
        PDF herunterladen
      </a>
    </main>
  );
}