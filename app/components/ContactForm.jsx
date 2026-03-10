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
      const result = await emailjs.send(
        'service_kc4bqbd',
        'template_x05prnd',
        {
          from_name: data.name,
          from_email: data.email,
          company: data.company,
          message: data.message,
          to_name: 'LionForge Team',
        },
        'ps1TPw128vEGRf9t5'
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
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-2xl mx-auto">
      {/* Message de statut */}
      <AnimatePresence>
        {submitStatus && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`mb-8 p-4 rounded-lg text-sm ${
              submitStatus === 'success' 
                ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                : 'bg-red-500/10 border border-red-500/20 text-red-400'
            }`}
          >
            {submitStatus === 'success' 
              ? '✓ Message envoyé avec succès'
              : '✗ Erreur - veuillez réessayer'}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Nom */}
      <div className="mb-6">
        <label className="block text-lion-gold text-sm font-medium mb-2">
          Nom complet <span className="text-red-400">*</span>
        </label>
        <input
          {...register('name', { required: 'Le nom est requis' })}
          className="w-full px-4 py-3 bg-lion-surface border border-lion-gold/20 rounded-lg focus:border-lion-gold focus:outline-none transition text-white placeholder-lion-muted/50"
          placeholder="Jean Dupont"
        />
        {errors.name && (
          <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="mb-6">
        <label className="block text-lion-gold text-sm font-medium mb-2">
          Email <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          {...register('email', { 
            required: 'L\'email est requis',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Email invalide'
            }
          })}
          className="w-full px-4 py-3 bg-lion-surface border border-lion-gold/20 rounded-lg focus:border-lion-gold focus:outline-none transition text-white placeholder-lion-muted/50"
          placeholder="jean@exemple.com"
        />
        {errors.email && (
          <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Entreprise (optionnel) */}
      <div className="mb-6">
        <label className="block text-lion-gold text-sm font-medium mb-2">
          Entreprise
        </label>
        <input
          {...register('company')}
          className="w-full px-4 py-3 bg-lion-surface border border-lion-gold/20 rounded-lg focus:border-lion-gold focus:outline-none transition text-white placeholder-lion-muted/50"
          placeholder="Votre entreprise (optionnel)"
        />
      </div>

      {/* Message */}
      <div className="mb-8">
        <label className="block text-lion-gold text-sm font-medium mb-2">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          rows="5"
          {...register('message', { 
            required: 'Le message est requis',
            minLength: {
              value: 10,
              message: 'Le message doit faire au moins 10 caractères'
            }
          })}
          className="w-full px-4 py-3 bg-lion-surface border border-lion-gold/20 rounded-lg focus:border-lion-gold focus:outline-none transition text-white placeholder-lion-muted/50 resize-none"
          placeholder="Décrivez votre projet..."
        />
        {errors.message && (
          <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-lion-gold text-lion-dark py-4 rounded-lg font-semibold 
                  hover:bg-opacity-90 transition-all duration-300 
                  shadow-lg shadow-lion-gold/20 disabled:opacity-50"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Envoi...
          </span>
        ) : (
          'Envoyer'
        )}
      </motion.button>

      {/* Mention légale */}
      <p className="text-xs text-center text-lion-muted/50 mt-6">
        En soumettant ce formulaire, vous acceptez notre politique de confidentialité
      </p>
    </form>
  );
}