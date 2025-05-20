
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed w-full z-50 bg-white shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="font-poppins font-bold text-2xl text-brand-blue">
              Marka<span className="text-brand-coral">-gency</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-brand-blue'
                    : 'text-brand-gray-600 hover:text-brand-blue'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button className="btn-primary">
              <Link to="/contact">Demander un devis</Link>
            </Button>
          </nav>
          
          {/* Mobile Navigation Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-medium py-2 transition-colors ${
                    isActive(link.href)
                      ? 'text-brand-blue'
                      : 'text-brand-gray-600 hover:text-brand-blue'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="btn-primary w-full mt-4">
                <Link to="/contact">Demander un devis</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
