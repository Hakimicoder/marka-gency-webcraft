
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Layout from '../components/layout/Layout';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Mail, Phone, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';

// Define the form validation schema using Zod
const formSchema = z.object({
  name: z.string().min(2, { message: 'Le nom doit contenir au moins 2 caractères.' }),
  email: z.string().email({ message: 'Veuillez entrer une adresse email valide.' }),
  phone: z.string().optional(),
  subject: z.string().min(5, { message: 'Le sujet doit contenir au moins 5 caractères.' }),
  message: z.string().min(10, { message: 'Le message doit contenir au moins 10 caractères.' }),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });
  
  const onSubmit = (data: FormData) => {
    // In a real application, you would send this data to your server
    console.log('Form submitted with data:', data);
    toast.success('Message envoyé avec succès ! Notre équipe vous contactera sous peu.', {
      duration: 5000,
    });
    form.reset();
  };
  
  return (
    <Layout
      title="Contact"
      description="Contactez Marka-gency pour discuter de vos projets de marketing digital et obtenir un devis personnalisé pour vos besoins."
      ogTitle="Contactez Marka-gency | Agence de marketing digital"
      ogDescription="Discutons de votre projet ! Remplissez notre formulaire de contact ou appelez-nous pour un échange personnalisé."
    >
      {/* Hero Section */}
      <section className="bg-brand-blue text-white pt-28 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-bold mb-6">
              Contactez <span className="text-brand-coral">notre équipe</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Discutons de votre projet et trouvons ensemble les solutions adaptées à vos besoins.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0% 100%)' }} />
      </section>
      
      {/* Contact Info */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Email */}
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Mail className="text-brand-blue w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <p className="text-brand-gray-600 mb-4">
                Envoyez-nous un email, nous vous répondrons sous 24h.
              </p>
              <a href="mailto:info@marka-gency.com" className="text-brand-blue font-medium hover:text-brand-coral transition-colors">
                info@marka-gency.com
              </a>
            </div>
            
            {/* Téléphone */}
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-brand-coral/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Phone className="text-brand-coral w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Téléphone</h3>
              <p className="text-brand-gray-600 mb-4">
                Appelez-nous pour une consultation immédiate.
              </p>
              <a href="tel:+33123456789" className="text-brand-blue font-medium hover:text-brand-coral transition-colors">
                +33 1 23 45 67 89
              </a>
            </div>
            
            {/* Réseaux Sociaux */}
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Linkedin className="text-brand-teal w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Réseaux sociaux</h3>
              <p className="text-brand-gray-600 mb-4">
                Suivez-nous pour les dernières actus et tendances.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue hover:text-brand-coral transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue hover:text-brand-coral transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue hover:text-brand-coral transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="section-title">Envoyez-nous un message</h2>
              <p className="text-brand-gray-600 mb-8">
                Remplissez le formulaire ci-dessous pour nous faire part de votre projet ou de vos questions.
              </p>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom *</FormLabel>
                          <FormControl>
                            <Input placeholder="Votre nom" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="votre@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Téléphone</FormLabel>
                          <FormControl>
                            <Input placeholder="Votre téléphone (facultatif)" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Sujet *</FormLabel>
                          <FormControl>
                            <Input placeholder="Sujet de votre message" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Détaillez votre projet ou votre demande..."
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="btn-primary w-full md:w-auto">
                    Envoyer le message
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </Form>
            </div>
            
            {/* Map */}
            <div>
              <h2 className="section-title">Nos bureaux</h2>
              <p className="text-brand-gray-600 mb-8">
                Venez nous rendre visite dans nos locaux au cœur de Paris.
              </p>
              
              <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.1411572710153!2d2.347200575968936!3d48.87956419981634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1ee61f5b1f%3A0xe651ef5bfd03b84b!2sPl.%20de%20la%20R%C3%A9publique%2C%2075003%20Paris!5e0!3m2!1sfr!2sfr!4v1708997001735!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Marka-gency Office Location"
                />
              </div>
              
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Marka-gency Paris</h3>
                <address className="not-italic text-brand-gray-600">
                  <p>123 Rue du Marketing</p>
                  <p>75000 Paris, France</p>
                  <p className="mt-2">Heures d'ouverture: Lun - Ven, 9h - 18h</p>
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="bg-brand-gray-100 py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Questions fréquentes</h2>
            <p className="section-subtitle">
              Trouvez rapidement des réponses aux questions les plus courantes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-brand-blue">
                Quel est le délai de réponse après l'envoi d'une demande ?
              </h3>
              <p className="text-brand-gray-600">
                Nous nous engageons à répondre à toutes les demandes dans un délai de 24 heures ouvrées. Pour les demandes urgentes, n'hésitez pas à nous contacter par téléphone.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-brand-blue">
                Comment se déroule un premier rendez-vous avec Marka-gency ?
              </h3>
              <p className="text-brand-gray-600">
                Le premier rendez-vous est dédié à la découverte de votre entreprise, vos objectifs et vos besoins. Nous analysons ensuite votre situation pour vous proposer des solutions adaptées.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-brand-blue">
                Proposez-vous des forfaits mensuels ou des prestations ponctuelles ?
              </h3>
              <p className="text-brand-gray-600">
                Nous proposons les deux types de collaboration. Des forfaits mensuels pour un accompagnement régulier, ou des prestations ponctuelles pour des projets spécifiques.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-brand-blue">
                Travaillez-vous avec des entreprises internationales ?
              </h3>
              <p className="text-brand-gray-600">
                Oui, notre équipe multilingue travaille avec des clients du monde entier. Nous adaptons nos stratégies aux spécificités culturelles et aux marchés locaux.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section id="cta" className="py-20">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-brand-blue to-brand-teal p-12 rounded-xl text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Commençons à travailler ensemble</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Transformez votre présence digitale avec Marka-gency et bénéficiez d'une stratégie sur mesure pour atteindre vos objectifs.
            </p>
            <Button size="lg" className="btn-secondary">
              <a href="#top" className="flex items-center">
                Contactez-nous maintenant
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
