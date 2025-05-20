
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-blue text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-2xl font-bold">
                Marka<span className="text-brand-coral">-gency</span>
              </h2>
            </Link>
            <p className="text-gray-300 mb-4">
              Votre partenaire stratégique pour une présence digitale impactante et des résultats concrets.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand-coral transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand-coral transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand-coral transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#marketing" className="text-gray-300 hover:text-white transition-colors">
                  Marketing Digital
                </Link>
              </li>
              <li>
                <Link to="/services#design" className="text-gray-300 hover:text-white transition-colors">
                  Design UI/UX
                </Link>
              </li>
              <li>
                <Link to="/services#seo" className="text-gray-300 hover:text-white transition-colors">
                  Référencement SEO
                </Link>
              </li>
              <li>
                <Link to="/services#development" className="text-gray-300 hover:text-white transition-colors">
                  Développement Web
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-gray-300">
              <p>123 Rue du Marketing</p>
              <p>75000 Paris, France</p>
              <p className="mt-4">info@marka-gency.com</p>
              <p>+33 1 23 45 67 89</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Marka-gency. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/mentions-legales" className="text-gray-400 text-sm hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link to="/politique-confidentialite" className="text-gray-400 text-sm hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
