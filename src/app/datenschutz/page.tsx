import React from 'react';

export const metadata = {
  title: 'Datenschutz | Kerem Sarica',
  description: 'Datenschutzerklärung',
  robots: {
    index: false,
    follow: true,
  },
};

export default function DatenschutzPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12" style={{ color: "var(--fg-primary)" }}>
      <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>
      
      <div className="prose dark:prose-invert">
        {/* FÜGE HIER DEN TEXT VOM GENERATOR EIN */}
        <p>
          Dies ist ein Platzhalter. Bitte generiere den vollständigen Text 
          über einen Dienst wie e-recht24.de.
        </p>
        
        <h3>1. Datenschutz auf einen Blick</h3>
        <p>Allgemeine Hinweise...</p>

        <h3>2. Hosting</h3>
        <p>Wir hosten unsere Website bei Vercel...</p>
        
        {/* Weitere Sektionen hier einfügen */}
      </div>
    </div>
  );
}