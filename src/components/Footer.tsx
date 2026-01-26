import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Hintergrund dunkel (gray-900) oder hell (gray-100), je nach deinem Design.
    // Hier ist eine helle Version, die gut zu "clean" passt:
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Linke Seite: Name & Copyright */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl text-gray-900">Kerem Sarica</h3>
            <p className="text-sm text-gray-500 mt-1">
              &copy; {currentYear} Alle Rechte vorbehalten.
            </p>
          </div>

          {/* Mitte: Social Icons */}
          <div className="flex gap-6">
            <a 
              href="https://github.com/DEINUSER" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors text-2xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/DEINUSER" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors text-2xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://instagram.com/DEINUSER" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-600 transition-colors text-2xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a 
              href="mailto:mail@keremsarica.de" 
              className="text-gray-500 hover:text-yellow-500 transition-colors text-2xl"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Trennlinie */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Unterer Bereich: Rechtliche Links */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-sm text-gray-500">
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-gray-900 transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-gray-900 transition-colors">
              Datenschutz
            </Link>
          </div>
          
          <div className="text-xs">
            Built with Next.js & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}