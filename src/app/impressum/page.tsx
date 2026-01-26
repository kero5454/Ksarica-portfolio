import React from 'react';

export const metadata = {
  title: 'Impressum | Kerem Sarica',
  description: 'Rechtliche Angaben',
  robots: {
    index: false, // Impressum muss nicht unbedingt bei Google ranken
    follow: true,
  },
};

export default function ImpressumPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Impressum</h1>
      
      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-semibold">Angaben gemäß § 5 DDG</h2>
        <p>
          Kerem Sarica<br />
          Musterstraße 1<br />
          12345 Musterstadt<br />
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-semibold">Kontakt</h2>
        <p>
          Telefon: +49 (0) 123 445566 <br />
          E-Mail: mail@keremsarica.de
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-semibold">Redaktionell verantwortlich</h2>
        <p>
          Kerem Sarica<br />
          Musterstraße 1<br />
          12345 Musterstadt
        </p>
      </section>
      
      {/* Hier ggf. Disclaimer / Haftungsausschluss einfügen */}
    </div>
  );
}