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
          Rathausstraße 16<br />
          72649 Wolfschlugen<br />
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-semibold">Kontakt</h2>
        <p>
          Telefon: +49 (0) 157 3203 0710 <br />
          E-Mail: Kerem.sarica [@] outlook.de
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-semibold">Redaktionell verantwortlich</h2>
        <p>
          Kerem Sarica<br />
          Rathausstraße 16<br />
          72649 Wolfschlugen
        </p>
      </section>
      
      <section className="mb-8 space-y-4 text-sm">
        <h2 className="text-xl font-semibold">Haftungsausschluss (Disclaimer)</h2>
        
        <div className="space-y-3">
          <h3 className="font-semibold text-base">Haftung für Inhalte</h3>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den 
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht 
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu 
            forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der 
            Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          </p>

          <h3 className="font-semibold text-base mt-4">Haftung für Links</h3>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
            Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>

          <h3 className="font-semibold text-base mt-4">Urheberrecht</h3>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
        </div>
      </section>
    </div>
  );
}