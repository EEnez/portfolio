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
    <section id="contact" className="pt-32 pb-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-secondary to-background" />
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-jade-electric/5 to-clay-sunset/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '18s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-clay-sunset/5 to-jade-electric/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '14s', animationDelay: '5s' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
            variants={itemVariants}
          >
            Me{" "}
            <span className="bg-gradient-to-r from-jade-electric to-interactive-primary bg-clip-text text-transparent">
              Contacter
            </span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-jade-electric to-interactive-primary mx-auto rounded-full mb-6"
            variants={itemVariants}
          />
          <motion.p 
            className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Vous avez un projet en tête ? Discutons-en ! Je serais ravi de découvrir vos idées et de voir comment nous pouvons collaborer.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info Sidebar */}
          <motion.div
            variants={containerVariants}
            className="lg:col-span-1 space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="group bg-gradient-to-br from-surface/50 to-surface-secondary/30 backdrop-blur-sm border border-text-secondary/10 rounded-2xl p-6 hover:border-interactive-primary/30 transition-all duration-500 relative overflow-hidden block"
                whileHover={{ y: -5, scale: 1.02 }}
                style={{ cursor: 'pointer' }}
              >
                {/* Floating decoration */}
                <div className={`absolute -top-2 -right-2 w-4 h-4 rounded-full opacity-20 animate-pulse ${
                  index === 0 ? 'bg-gradient-to-r from-blue-500 to-cyan-400' :
                  index === 1 ? 'bg-gradient-to-r from-green-500 to-emerald-400' :
                  'bg-gradient-to-r from-purple-500 to-pink-400'
                }`} />
                
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-interactive-primary/5 to-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                <div className="relative z-10 flex items-start space-x-4">
                  <motion.div 
                    className={`p-4 rounded-2xl ${
                      index === 0 ? 'bg-gradient-to-r from-blue-500/10 to-cyan-400/10 border border-blue-400/20' :
                      index === 1 ? 'bg-gradient-to-r from-green-500/10 to-emerald-400/10 border border-green-400/20' :
                      'bg-gradient-to-r from-clay-sunset/10 to-clay-hover/10 border border-clay-sunset/20'
                    }`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className={
                      index === 0 ? 'text-blue-400' :
                      index === 1 ? 'text-green-400' :
                      'text-clay-sunset'
                    }>
                      {info.icon}
                    </div>
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2 text-text-primary group-hover:text-interactive-primary transition-colors">
                      {info.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed group-hover:text-text-primary transition-colors">
                      {info.content}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
            
            {/* Social Media Card */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-surface/50 to-surface-secondary/30 backdrop-blur-sm border border-text-secondary/10 rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-jade-electric to-clay-sunset rounded-full opacity-20 animate-pulse" />
              
              <h3 className="font-bold text-lg mb-6 text-text-primary">Suivez-moi</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/EEnez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gradient-to-r from-gray-800/20 to-gray-900/20 border border-gray-600/20 rounded-2xl hover:from-gray-700/30 hover:to-gray-800/30 hover:border-gray-500/30 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  style={{ cursor: 'pointer' }}
                >
                  <GithubIcon />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/enez-gubeljic-76313229b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gradient-to-r from-blue-600/20 to-blue-700/20 border border-blue-500/20 rounded-2xl hover:from-blue-500/30 hover:to-blue-600/30 hover:border-blue-400/30 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  style={{ cursor: 'pointer' }}
                >
                  <LinkedInIcon />
                </motion.a>
                <motion.a
                  href="https://x.com/Enez_Gubeljic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gradient-to-r from-gray-900/20 to-black/20 border border-gray-700/20 rounded-2xl hover:from-gray-800/30 hover:to-gray-900/30 hover:border-gray-600/30 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  style={{ cursor: 'pointer' }}
                >
                  <TwitterIcon />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          
          
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 bg-gradient-to-br from-surface/50 to-surface-secondary/30 backdrop-blur-sm border border-text-secondary/10 rounded-2xl p-8 md:p-10 relative overflow-hidden"
          >
            {/* Floating decoration */}
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-r from-jade-electric to-clay-sunset rounded-full opacity-20 animate-pulse" />
            
            {/* Success Message */}
            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="bg-gradient-to-r from-green-500/10 to-emerald-400/10 border border-green-400/20 text-green-400 p-6 rounded-2xl mb-8 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-400/5" />
                <div className="relative z-10 flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="font-semibold">Message envoyé avec succès ! Je vous répondrai rapidement.</p>
                </div>
              </motion.div>
            ) : null}
            
            {/* Error Message */}
            {submitError ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="bg-gradient-to-r from-red-500/10 to-pink-400/10 border border-red-400/20 text-red-400 p-6 rounded-2xl mb-8 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-pink-400/5" />
                <div className="relative z-10 flex items-center space-x-3">
                  <div className="w-6 h-6 bg-red-400 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="font-semibold">{submitError}</p>
                </div>
              </motion.div>
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
                    className={`w-full px-4 py-4 rounded-xl border-2 ${
                      validationErrors.name 
                        ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' 
                        : 'border-text-secondary/20 focus:border-interactive-primary focus:ring-interactive-primary/20'
                    } bg-surface/30 backdrop-blur-sm focus:outline-none focus:ring-4 transition-all duration-300 placeholder:text-text-secondary/60`}
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
                    className={`w-full px-4 py-4 rounded-xl border-2 ${
                      validationErrors.email 
                        ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' 
                        : 'border-text-secondary/20 focus:border-interactive-primary focus:ring-interactive-primary/20'
                    } bg-surface/30 backdrop-blur-sm focus:outline-none focus:ring-4 transition-all duration-300 placeholder:text-text-secondary/60`}
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
                  className={`w-full px-4 py-4 rounded-xl border-2 ${
                    validationErrors.subject 
                      ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' 
                      : 'border-text-secondary/20 focus:border-interactive-primary focus:ring-interactive-primary/20'
                  } bg-surface/30 backdrop-blur-sm focus:outline-none focus:ring-4 transition-all duration-300 placeholder:text-text-secondary/60`}
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
                  className={`w-full px-4 py-4 rounded-xl border-2 ${
                    validationErrors.message 
                      ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' 
                      : 'border-text-secondary/20 focus:border-interactive-primary focus:ring-interactive-primary/20'
                  } bg-surface/30 backdrop-blur-sm focus:outline-none focus:ring-4 transition-all duration-300 placeholder:text-text-secondary/60 resize-none`}
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
                className={`w-full px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 relative overflow-hidden ${
                  isSubmitting 
                    ? 'bg-text-secondary/20 text-text-secondary cursor-not-allowed' 
                    : 'bg-gradient-to-r from-jade-electric to-jade-hover hover:from-jade-hover hover:to-jade-electric text-white hover:shadow-lg hover:shadow-jade-electric/30'
                }`}
                whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                style={{ cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Envoyer le message
                    </>
                  )}
                </span>
                
                {!isSubmitting && (
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 