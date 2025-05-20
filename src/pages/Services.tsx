
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';

const Services = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to section if hash is present
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // Add a small delay to ensure the element is properly rendered
        setTimeout(() => {
          window.scrollTo({
            top: (element as HTMLElement).offsetTop - 100,
            behavior: 'smooth',
          });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  
  return (
    <Layout
      title="Nos Services"
      description="Découvrez les services de marketing digital de Marka-gency : SEO, développement web, design UI/UX et stratégies marketing sur mesure."
      ogTitle="Services de Marketing Digital | Marka-gency"
      ogDescription="Des services personnalisés pour votre croissance digitale : SEO, développement web, design UI/UX et stratégies marketing."
    >
      {/* Hero Section */}
      <section className="bg-brand-blue text-white pt-28 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-bold mb-6">
              Nos <span className="text-brand-coral">services</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Des solutions personnalisées pour répondre à tous vos besoins en marketing digital et propulser votre entreprise vers le succès.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0% 100%)' }} />
      </section>
      
      {/* Introduction */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Une approche 360° pour votre croissance digitale</h2>
              <p className="mb-6 text-brand-gray-600">
                Chez Marka-gency, nous croyons en une approche globale du marketing digital. Notre équipe pluridisciplinaire travaille en synergie pour créer des stratégies cohérentes qui maximisent votre retour sur investissement.
              </p>
              <p className="mb-6 text-brand-gray-600">
                Nous adaptons nos services à vos besoins spécifiques, qu'il s'agisse d'augmenter votre visibilité en ligne, d'améliorer l'expérience utilisateur sur votre site web ou de mettre en place des campagnes marketing performantes.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-brand-coral/10 absolute -right-4 -top-4 w-full h-full rounded-lg"></div>
              <img
                src="/placeholder.svg"
                alt="Services de marketing digital"
                className="rounded-lg relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Service 1: Marketing Digital */}
      <section id="marketing" className="bg-brand-gray-100 py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="bg-brand-blue/10 absolute -left-4 -bottom-4 w-full h-full rounded-lg"></div>
              <img
                src="/placeholder.svg"
                alt="Marketing Digital"
                className="rounded-lg relative z-10 w-full"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="section-title">Marketing Digital</h2>
              <p className="mb-6 text-brand-gray-600">
                Nos stratégies de marketing digital sont conçues pour augmenter votre visibilité, générer des leads qualifiés et convertir vos prospects en clients fidèles.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Check className="text-brand-coral mr-3" />
                  <span>Analyse de marché et positionnement stratégique</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-brand-coral mr-3" />
                  <span>Stratégies de contenu et inbound marketing</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-brand-coral mr-3" />
                  <span>Campagnes sur les réseaux sociaux</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-brand-coral mr-3" />
                  <span>Email marketing et automatisation</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-brand-coral mr-3" />
                  <span>Publicité digitale (Google Ads, Facebook Ads, LinkedIn Ads)</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-brand-coral mr-3" />
                  <span>Analyse de performance et optimisation continue</span>
                </div>
              </div>
              
              <Button asChild className="btn-primary">
                <Link to="/contact">Demander un devis</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service 2: Design UI/UX */}
      <section id="design" className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Design UI/UX</h2>
              <p className="mb-6 text-brand-gray-600">
                Créez des expériences utilisateur mémorables avec des interfaces intuitives et esthétiques qui convertissent les visiteurs en clients.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Check className="text-brand-coral mr-3" />
                  <span>Audit UX et analyse des parcours utilisateurs</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-brand-coral mr-3" />
                  <span>Conception d'interfaces web et mobile</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-brand-coral mr-3" />
                  <span>Prototypage et tests utilisateurs</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-brand-coral mr-3" />
                  <span>Design de systèmes et guidelines</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-brand-coral mr-3" />
                  <span>Refonte graphique et modernisation d'interfaces</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-brand-coral mr-3" />
                  <span>Optimisation des taux de conversion (CRO)</span>
                </div>
              </div>
              
              <Button asChild className="btn-primary">
                <Link to="/contact">Demander un devis</Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-brand-coral/10 absolute -right-4 -top-4 w-full h-full rounded-lg"></div>
              <img
                src="/placeholder.svg"
                alt="Design UI/UX"
                className="rounded-lg relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Service 3: Référencement SEO */}
      <section id="seo" className="bg-brand-gray-100 py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="bg-brand-teal/10 absolute -left-4 -bottom-4 w-full h-full rounded-lg"></div>
              <img
                src="/placeholder.svg"
                alt="Référencement SEO"
                className="rounded-lg relative z-10 w-full"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="section-title">Référencement SEO</h2>
              <p className="mb-6 text-brand-gray-600">
                Améliorez votre visibilité sur les moteurs de recherche et attirez un trafic qualifié grâce à nos stratégies SEO sur mesure.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Check className="text-brand-coral mr-3" />
                  <span>Audit SEO technique et analyse concurrentielle</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-brand-coral mr-3" />
                  <span>Optimisation on-page et technique</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-brand-coral mr-3" />
                  <span>Création de contenu optimisé pour le SEO</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-brand-coral mr-3" />
                  <span>Stratégie de netlinking et autorité de domaine</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-brand-coral mr-3" />
                  <span>SEO local pour les entreprises avec points de vente physiques</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-brand-coral mr-3" />
                  <span>Suivi et rapports de performance</span>
                </div>
              </div>
              
              <Button asChild className="btn-primary">
                <Link to="/contact">Demander un devis</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service 4: Développement Web */}
      <section id="development" className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Développement Web</h2>
              <p className="mb-6 text-brand-gray-600">
                Des sites web et applications performants, sécurisés et parfaitement adaptés à vos besoins commerciaux.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Check className="text-brand-coral mr-3" />
                  <span>Création de sites vitrines et e-commerce</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-brand-coral mr-3" />
                  <span>Applications web sur mesure</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-brand-coral mr-3" />
                  <span>Intégration de CMS (WordPress, Shopify, etc.)</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-brand-coral mr-3" />
                  <span>Optimisation des performances et de la vitesse de chargement</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-brand-coral mr-3" />
                  <span>Responsive design et compatibilité multi-appareils</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-brand-coral mr-3" />
                  <span>Maintenance et support technique</span>
                </div>
              </div>
              
              <Button asChild className="btn-primary">
                <Link to="/contact">Demander un devis</Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-brand-blue/10 absolute -right-4 -top-4 w-full h-full rounded-lg"></div>
              <img
                src="/placeholder.svg"
                alt="Développement Web"
                className="rounded-lg relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Tarification */}
      <section id="pricing" className="bg-brand-blue text-white py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Tarification</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Des forfaits adaptés à tous les besoins et budgets. Contactez-nous pour un devis personnalisé.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Forfait Essentiel */}
            <div className="bg-white text-brand-gray-800 p-8 rounded-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold">Forfait Essentiel</h3>
                <p className="text-brand-coral text-2xl font-bold mt-2">À partir de 1 500 €</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="text-brand-coral mr-3 w-5 h-5" />
                  <span>Audit et recommandations</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-brand-coral mr-3 w-5 h-5" />
                  <span>Optimisation de base</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-brand-coral mr-3 w-5 h-5" />
                  <span>Rapport mensuel</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-brand-coral mr-3 w-5 h-5" />
                  <span>Support par email</span>
                </li>
              </ul>
              
              <Button asChild className="w-full bg-brand-blue text-white hover:bg-brand-blue/90">
                <Link to="/contact">Demander un devis</Link>
              </Button>
            </div>
            
            {/* Forfait Business */}
            <div className="bg-white text-brand-gray-800 p-8 rounded-lg shadow-xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-coral text-white px-4 py-1 rounded-full text-sm font-medium">
                Populaire
              </div>
              
              <div className="mb-4">
                <h3 className="text-xl font-semibold">Forfait Business</h3>
                <p className="text-brand-coral text-2xl font-bold mt-2">À partir de 3 500 €</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="text-brand-coral mr-3 w-5 h-5" />
                  <span>Tout le forfait Essentiel</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-brand-coral mr-3 w-5 h-5" />
                  <span>Stratégie sur mesure</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-brand-coral mr-3 w-5 h-5" />
                  <span>Création de contenu</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-brand-coral mr-3 w-5 h-5" />
                  <span>Gestion des réseaux sociaux</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-brand-coral mr-3 w-5 h-5" />
                  <span>Support prioritaire</span>
                </li>
              </ul>
              
              <Button asChild className="w-full bg-brand-coral text-white hover:bg-brand-coral/90">
                <Link to="/contact">Demander un devis</Link>
              </Button>
            </div>
            
            {/* Forfait Enterprise */}
            <div className="bg-white text-brand-gray-800 p-8 rounded-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold">Forfait Enterprise</h3>
                <p className="text-brand-coral text-2xl font-bold mt-2">Sur mesure</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="text-brand-coral mr-3 w-5 h-5" />
                  <span>Tout le forfait Business</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-brand-coral mr-3 w-5 h-5" />
                  <span>Solution complète 360°</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-brand-coral mr-3 w-5 h-5" />
                  <span>Consultant dédié</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-brand-coral mr-3 w-5 h-5" />
                  <span>Développement sur mesure</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-brand-coral mr-3 w-5 h-5" />
                  <span>Support 24/7</span>
                </li>
              </ul>
              
              <Button asChild className="w-full bg-brand-blue text-white hover:bg-brand-blue/90">
                <Link to="/contact">Demander un devis</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section id="cta" className="py-20">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-brand-blue to-brand-teal p-12 rounded-xl text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à lancer votre projet ?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
            </p>
            <Button asChild size="lg" className="btn-secondary">
              <Link to="/contact">Demander un devis gratuit</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
