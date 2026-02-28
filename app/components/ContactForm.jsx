"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Remplace ces valeurs par les tiennes (inscris-toi gratuitement sur emailjs.com)
      const result = await emailjs.send(
        'service_kc4bqbd',    // Ton Service ID
        'template_x05prnd',   // Ton Template ID
        {
          from_name: data.name,
          from_email: data.email,
          company: data.company,
          message: data.message,
          to_name: 'LionForge Team',
        },
        'ps1TPw128vEGRf9t5'        // Ton User ID
      );
      
      if (result.status === 200) {
        setSubmitStatus('success');
        reset();
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      console.error('Erreur:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Notification de succès/erreur */}
      <AnimatePresence>
        {submitStatus && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`p-4 rounded-lg ${
              submitStatus === 'success' 
                ? 'bg-green-500/20 border border-green-500 text-green-500'
                : 'bg-red-500/20 border border-red-500 text-red-500'
            }`}
          >
            {submitStatus === 'success' 
              ? '✅ Message envoyé avec succès ! Nous vous répondrons dans les 24h.'
              : '❌ Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.'}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Nom */}
      <div className="group">
        <label htmlFor="name" className="block text-lion-gold mb-2 text-sm font-medium">
          Nom complet <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Le nom est requis' })}
          className={`w-full px-4 py-3 bg-lion-dark border rounded-lg focus:outline-none transition-all duration-300
            ${errors.name 
              ? 'border-red-500 focus:border-red-500' 
              : 'border-lion-gold/20 focus:border-lion-gold'
            }`}
          placeholder="Jean Dupont"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="group">
        <label htmlFor="email" className="block text-lion-gold mb-2 text-sm font-medium">
          Email <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          id="email"
          {...register('email', { 
            required: 'L\'email est requis',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email invalide'
            }
          })}
          className={`w-full px-4 py-3 bg-lion-dark border rounded-lg focus:outline-none transition-all duration-300
            ${errors.email 
              ? 'border-red-500 focus:border-red-500' 
              : 'border-lion-gold/20 focus:border-lion-gold'
            }`}
          placeholder="jean@entreprise.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Entreprise */}
      <div className="group">
        <label htmlFor="company" className="block text-lion-gold mb-2 text-sm font-medium">
          Entreprise
        </label>
        <input
          type="text"
          id="company"
          {...register('company')}
          className="w-full px-4 py-3 bg-lion-dark border border-lion-gold/20 rounded-lg focus:border-lion-gold focus:outline-none transition-all duration-300"
          placeholder="Votre entreprise (optionnel)"
        />
      </div>

      {/* Message */}
      <div className="group">
        <label htmlFor="message" className="block text-lion-gold mb-2 text-sm font-medium">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          rows="5"
          {...register('message', { 
            required: 'Le message est requis',
            minLength: {
              value: 10,
              message: 'Le message doit faire au moins 10 caractères'
            }
          })}
          className={`w-full px-4 py-3 bg-lion-dark border rounded-lg focus:outline-none transition-all duration-300 resize-none
            ${errors.message 
              ? 'border-red-500 focus:border-red-500' 
              : 'border-lion-gold/20 focus:border-lion-gold'
            }`}
          placeholder="Décrivez votre projet ou votre question..."
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Bouton */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-lion-gold text-lion-dark px-8 py-4 rounded-lg font-semibold 
                   hover:bg-opacity-90 transition-all duration-300 
                   shadow-lg shadow-lion-gold/20 hover:shadow-xl hover:shadow-lion-gold/30
                   disabled:opacity-50 disabled:cursor-not-allowed
                   relative overflow-hidden group"
      >
        <span className="relative z-10">
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Envoi en cours...
            </span>
          ) : (
            'Envoyer le message'
          )}
        </span>
        <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 opacity-20"></div>
      </motion.button>

      {/* Message de confirmation */}
      <p className="text-xs text-lion-light/50 text-center mt-4">
        En soumettant ce formulaire, vous acceptez que vos données soient traitées conformément à notre politique de confidentialité.
      </p>
    </form>
  );
}