
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-6xl md:text-8xl font-bold text-brand-blue mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Page non trouvée</h2>
      <p className="text-brand-gray-600 text-lg max-w-md text-center mb-8">
        La page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <Button asChild size="lg" className="btn-primary">
        <Link to="/">Retour à l'accueil</Link>
      </Button>
    </div>
  );
};

export default NotFound;
