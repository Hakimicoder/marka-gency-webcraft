
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <Layout
      title="Accueil"
      description="Marka-gency - Votre partenaire en marketing digital pour propulser votre croissance en ligne avec des stratégies innovantes."
      ogTitle="Marka-gency | Agence de marketing digital"
      ogDescription="Propulsez votre entreprise avec nos solutions de marketing digital sur mesure."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-blue to-brand-teal text-white pt-28 pb-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeIn">
              <h1 className="font-bold mb-6">
                Propulsez votre <span className="text-brand-coral">croissance digitale</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100">
                Des solutions de marketing innovantes pour transformer votre présence en ligne et maximiser votre retour sur investissement.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="btn-secondary">
                  <Link to="/contact">Demander un devis</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-brand-blue">
                  <Link to="/services">Découvrir nos services</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block relative animate-fadeIn">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-coral/20 to-brand-teal/20 rounded-lg" />
              <img
                src="/placeholder.svg"
                alt="Marketing Digital Stratégique"
                className="rounded-lg relative z-10"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0% 100%)' }} />
      </section>

      {/* À propos */}
      <section id="a-propos" className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">À propos de Marka-gency</h2>
            <p className="section-subtitle">
              Une agence qui propulse les marques vers le succès digital depuis plus de 10 ans.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-brand-blue/10 absolute -left-4 -bottom-4 w-full h-full rounded-lg"></div>
              <img
                src="/placeholder.svg"
                alt="Notre équipe"
                className="rounded-lg relative z-10 w-full"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-brand-blue">Notre vision</h3>
              <p className="mb-6 text-brand-gray-600">
                Fondée en 2013, Marka-gency apporte une expertise pluridisciplinaire dans tous les domaines du marketing digital. Notre mission est d'aider les entreprises à exploiter pleinement le potentiel du digital pour atteindre leurs objectifs commerciaux.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-brand-teal/10 p-3 rounded-full mr-4">
                    <div className="w-6 h-6 bg-brand-teal rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Innovation continue</h4>
                    <p className="text-brand-gray-600">Nous restons à la pointe des dernières tendances et technologies.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-coral/10 p-3 rounded-full mr-4">
                    <div className="w-6 h-6 bg-brand-coral rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Résultats mesurables</h4>
                    <p className="text-brand-gray-600">Nous nous concentrons sur des KPIs concrets pour mesurer le succès.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-blue/10 p-3 rounded-full mr-4">
                    <div className="w-6 h-6 bg-brand-blue rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Approche personnalisée</h4>
                    <p className="text-brand-gray-600">Chaque client bénéficie d'une stratégie sur mesure adaptée à ses besoins.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos expertises */}
      <section id="expertises" className="bg-brand-gray-100 py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Nos expertises</h2>
            <p className="section-subtitle">
              Une gamme complète de services pour vous accompagner dans votre croissance digitale.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Marketing Digital */}
            <div className="card group hover:-translate-y-1 transition-transform">
              <div className="mb-4 text-brand-coral">
                <div className="w-12 h-12 bg-brand-coral/10 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-brand-coral rounded-md"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Marketing Digital</h3>
              <p className="text-brand-gray-600 mb-4">
                Stratégies marketing omnicanal pour augmenter votre visibilité et engagement.
              </p>
              <Link
                to="/services#marketing"
                className="inline-flex items-center text-brand-blue font-medium group-hover:text-brand-coral transition-colors"
              >
                En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
            {/* Design UI/UX */}
            <div className="card group hover:-translate-y-1 transition-transform">
              <div className="mb-4 text-brand-teal">
                <div className="w-12 h-12 bg-brand-teal/10 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-brand-teal rounded-md"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Design UI/UX</h3>
              <p className="text-brand-gray-600 mb-4">
                Interfaces utilisateur intuitives et expériences mémorables pour vos utilisateurs.
              </p>
              <Link
                to="/services#design"
                className="inline-flex items-center text-brand-blue font-medium group-hover:text-brand-coral transition-colors"
              >
                En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
            {/* Référencement SEO */}
            <div className="card group hover:-translate-y-1 transition-transform">
              <div className="mb-4 text-brand-blue">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-brand-blue rounded-md"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Référencement SEO</h3>
              <p className="text-brand-gray-600 mb-4">
                Optimisez votre visibilité sur les moteurs de recherche et attirez un trafic qualifié.
              </p>
              <Link
                to="/services#seo"
                className="inline-flex items-center text-brand-blue font-medium group-hover:text-brand-coral transition-colors"
              >
                En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
            {/* Développement Web */}
            <div className="card group hover:-translate-y-1 transition-transform">
              <div className="mb-4 text-brand-gray-600">
                <div className="w-12 h-12 bg-brand-gray-200 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-brand-gray-600 rounded-md"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Développement Web</h3>
              <p className="text-brand-gray-600 mb-4">
                Sites web et applications performants, sécurisés et parfaitement adaptés à vos besoins.
              </p>
              <Link
                to="/services#development"
                className="inline-flex items-center text-brand-blue font-medium group-hover:text-brand-coral transition-colors"
              >
                En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pourquoi nous choisir */}
      <section id="pourquoi-nous" className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Pourquoi nous choisir ?</h2>
            <p className="section-subtitle">
              Des valeurs fortes qui nous distinguent et garantissent votre satisfaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-brand-blue rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Expertise pluridisciplinaire</h3>
              <p className="text-brand-gray-600">
                Notre équipe regroupe des experts dans chaque domaine du marketing digital, garantissant une approche holistique et efficace.
              </p>
            </div>
            
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-brand-coral/10 rounded-full flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-brand-coral rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Approche data-driven</h3>
              <p className="text-brand-gray-600">
                Nous prenons des décisions basées sur des données concrètes pour maximiser l'efficacité de vos campagnes et investissements.
              </p>
            </div>
            
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-brand-teal rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Accompagnement personnalisé</h3>
              <p className="text-brand-gray-600">
                Un suivi constant et une communication transparente pour vous tenir informé des avancées et résultats de vos projets.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Témoignages */}
      <section id="temoignages" className="bg-brand-blue py-20 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ce que nos clients disent</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Des partenaires satisfaits qui témoignent de l'efficacité de nos services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg text-brand-gray-800 relative">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-brand-coral rounded-full"></div>
              <p className="mb-6 italic">
                "Marka-gency a transformé notre approche marketing. Leur expertise en SEO a multiplié notre trafic organique par 3 en seulement 6 mois."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-brand-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-semibold">Sophie Martin</h4>
                  <p className="text-sm text-brand-gray-600">Directrice Marketing, TechInno</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg text-brand-gray-800 relative">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-brand-coral rounded-full"></div>
              <p className="mb-6 italic">
                "Le redesign de notre site web par Marka-gency a considérablement amélioré l'engagement des utilisateurs et notre taux de conversion."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-brand-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-semibold">Thomas Dubois</h4>
                  <p className="text-sm text-brand-gray-600">CEO, E-Commerce Plus</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg text-brand-gray-800 relative">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-brand-coral rounded-full"></div>
              <p className="mb-6 italic">
                "Un partenaire stratégique qui comprend réellement nos besoins et nous propose des solutions adaptées à notre secteur très concurrentiel."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-brand-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-semibold">Lucie Bernard</h4>
                  <p className="text-sm text-brand-gray-600">Fondatrice, Studio Design LB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section id="cta" className="py-20">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-brand-blue to-brand-teal p-12 rounded-xl text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à transformer votre présence digitale ?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
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

export default Home;
