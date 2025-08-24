"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { validateContactForm, sanitizeInput, type ContactFormData, type ValidationErrors } from '@/utils/validation';
import { GithubIcon, LinkedInIcon, TwitterIcon } from './SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);
    setFormData(prev => ({ ...prev, [name]: sanitizedValue }));
    
    if (validationErrors[name as keyof ValidationErrors]) {
      setValidationErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    const errors = validateContactForm(formData);
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setIsSubmitting(false);
      return;
    }
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setValidationErrors({});
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError(
        error instanceof Error 
          ? error.message 
          : 'Une erreur est survenue. Veuillez réessayer.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <EnvelopeIcon className="h-6 w-6" />,
      title: 'Email',
      content: 'enezgubeljic@gmail.com',
      link: 'mailto:enezgubeljic@gmail.com',
    },
    {
      icon: <PhoneIcon className="h-6 w-6" />,
      title: 'Téléphone',
      content: '+32 486 08 13 69',
      link: 'tel:+32486081369',
    },
    {
      icon: <MapPinIcon className="h-6 w-6" />,
      title: 'Adresse',
      content: 'Bruxelles, Belgique',
      link: 'https://maps.google.com/?q=Bruxelles,Belgique',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          <span className="inline-block border-b-4 border-primary pb-2">Me Contacter</span>
        </h2>
        
        <p className="text-lg text-center max-w-3xl mx-auto mb-12 px-4">
          Vous avez un projet en tête ou une question ? N&apos;hésitez pas à me contacter. Je vous répondrai dans les plus brefs délais.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-1 space-y-4 md:space-y-6"
          >
            {contactInfo.map((info) => (
              <motion.a
                key={info.title}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="flex items-start p-6 bg-white dark:bg-dark rounded-xl shadow-subtle hover:shadow-lg transition-shadow"
              >
                <div className="p-3 bg-border-light text-primary rounded-full mr-4">
                  {info.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                  <p className="text-secondary">{info.content}</p>
                </div>
              </motion.a>
            ))}
            
            <motion.div
              variants={itemVariants}
              className="p-6 bg-white dark:bg-dark rounded-xl shadow-subtle mt-8"
            >
              <h3 className="font-semibold text-lg mb-4">Suivez-moi</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/EEnez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-border-light dark:bg-border rounded-full hover:bg-primary/10 hover:text-primary transition-colors group"
                >
                  <GithubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/enez-gubeljic-76313229b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-border-light dark:bg-border rounded-full hover:bg-primary/10 hover:text-primary transition-colors group"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://x.com/Enez_Gubeljic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-border-light dark:bg-border rounded-full hover:bg-primary/10 hover:text-primary transition-colors group"
                >
                  <TwitterIcon />
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-2 bg-white dark:bg-dark rounded-xl shadow-subtle p-6 md:p-8"
          >
            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 p-4 rounded-lg mb-6"
              >
                Votre message a été envoyé avec succès ! Je vous répondrai dès que possible.
              </motion.div>
            ) : null}
            
            {submitError ? (
              <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 p-4 rounded-lg mb-6">
                {submitError}
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${
                      validationErrors.name 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-border dark:border-border-dark focus:ring-primary'
                    } bg-white dark:bg-dark focus:outline-none focus:ring-2`}
                    placeholder="Enez Gubeljic"
                  />
                  {validationErrors.name && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {validationErrors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${
                      validationErrors.email 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-border dark:border-border-dark focus:ring-primary'
                    } bg-white dark:bg-dark focus:outline-none focus:ring-2`}
                    placeholder="enezgubeljic@gmail.com"
                  />
                  {validationErrors.email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {validationErrors.email}
                    </p>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${
                    validationErrors.subject 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-border dark:border-border-dark focus:ring-primary'
                  } bg-white dark:bg-dark focus:outline-none focus:ring-2`}
                  placeholder="Sujet de votre message"
                />
                {validationErrors.subject && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {validationErrors.subject}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    validationErrors.message 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-border dark:border-border-dark focus:ring-primary'
                  } bg-white dark:bg-dark focus:outline-none focus:ring-2`}
                  placeholder="Votre message..."
                ></textarea>
                {validationErrors.message && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {validationErrors.message}
                  </p>
                )}
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 bg-primary text-white rounded-md font-medium transition-colors ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-interactive-hover'
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 