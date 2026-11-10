"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      projectType: "Site web",
      budget: "Non défini / À cadrer",
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setSubmitResult({
          type: "success",
          message: resData.message || "Votre message a été transmis avec succès !",
        });
        reset();
      } else {
        setSubmitResult({
          type: "error",
          message: resData.error || "Une erreur est survenue lors de l'envoi.",
        });
      }
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitResult({
        type: "error",
        message: "Impossible de joindre le serveur. Vous pouvez aussi nous contacter à contact@lionforge.com.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    "Site web",
    "Application mobile",
    "Logiciel sur mesure",
    "Solution numérique",
    "Conseil technologique",
    "Autre",
  ];

  const budgetRanges = [
    "Non défini / À cadrer",
    "< 5 000 €",
    "5 000 € - 15 000 €",
    "15 000 € - 30 000 €",
    "> 30 000 €",
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Feedback Toast */}
      {submitResult && (
        <div
          className={`mb-8 p-4 rounded-xl border flex items-start gap-3 transition-all ${
            submitResult.type === "success"
              ? "bg-[#FFD700]/10 border-[#FFD700]/30 text-[#FFD700]"
              : "bg-[#FF4500]/10 border-[#FF4500]/30 text-[#FF4500]"
          }`}
          role="alert"
        >
          {submitResult.type === "success" ? (
            <CheckCircle2 size={20} className="shrink-0 mt-0.5" />
          ) : (
            <AlertCircle size={20} className="shrink-0 mt-0.5" />
          )}
          <div className="text-sm leading-relaxed">{submitResult.message}</div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name and Email Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#8892B0] mb-2">
              Nom complet <span className="text-[#FF4500]">*</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Veuillez renseigner votre nom complet." })}
              placeholder="Ex: Jean-Luc Dupont"
              className="w-full px-4 py-3.5 rounded-xl bg-[#101114] border border-white/10 text-white placeholder-[#8892B0]/40 text-sm focus:border-[#FFD700] focus:outline-none transition-colors shadow-inner"
            />
            {errors.name && (
              <p className="text-xs text-[#FF4500] mt-1.5">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#8892B0] mb-2">
              Adresse Email <span className="text-[#FF4500]">*</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Veuillez renseigner votre adresse e-mail.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Format d'adresse e-mail invalide.",
                },
              })}
              placeholder="jean@entreprise.com"
              className="w-full px-4 py-3.5 rounded-xl bg-[#101114] border border-white/10 text-white placeholder-[#8892B0]/40 text-sm focus:border-[#FFD700] focus:outline-none transition-colors shadow-inner"
            />
            {errors.email && (
              <p className="text-xs text-[#FF4500] mt-1.5">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Company and Project Type Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#8892B0] mb-2">
              Entreprise <span className="text-[10px] text-[#8892B0]/60">(Optionnel)</span>
            </label>
            <input
              type="text"
              {...register("company")}
              placeholder="Société ou projet"
              className="w-full px-4 py-3.5 rounded-xl bg-[#101114] border border-white/10 text-white placeholder-[#8892B0]/40 text-sm focus:border-[#FFD700] focus:outline-none transition-colors shadow-inner"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#8892B0] mb-2">
              Type de projet
            </label>
            <select
              {...register("projectType")}
              className="w-full px-4 py-3.5 rounded-xl bg-[#101114] border border-white/10 text-white text-sm focus:border-[#FFD700] focus:outline-none transition-colors shadow-inner cursor-pointer"
            >
              {projectTypes.map((type) => (
                <option key={type} value={type} className="bg-[#101114] text-white">
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#8892B0] mb-2">
              Budget indicatif <span className="text-[10px] text-[#8892B0]/60">(Optionnel)</span>
            </label>
            <select
              {...register("budget")}
              className="w-full px-4 py-3.5 rounded-xl bg-[#101114] border border-white/10 text-white text-sm focus:border-[#FFD700] focus:outline-none transition-colors shadow-inner cursor-pointer"
            >
              {budgetRanges.map((range) => (
                <option key={range} value={range} className="bg-[#101114] text-white">
                  {range}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Project Description Message */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#8892B0] mb-2">
            Description du projet & Enjeux <span className="text-[#FF4500]">*</span>
          </label>
          <textarea
            rows={5}
            {...register("message", {
              required: "Veuillez détailler les grandes lignes de votre projet.",
              minLength: {
                value: 10,
                message: "Veuillez fournir au moins 10 caractères.",
              },
            })}
            placeholder="Parlez-nous de vos objectifs, des fonctionnalités prioritaires, des délais envisagés..."
            className="w-full px-4 py-3.5 rounded-xl bg-[#101114] border border-white/10 text-white placeholder-[#8892B0]/40 text-sm focus:border-[#FFD700] focus:outline-none transition-colors shadow-inner resize-none"
          />
          {errors.message && (
            <p className="text-xs text-[#FF4500] mt-1.5">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full forge-btn-primary py-4 rounded-xl text-sm font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-2xl disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? (
              <span className="inline-flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-[#050505] border-t-transparent rounded-full animate-spin" />
                <span>Transmission à la Forge...</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-2">
                <Send size={16} />
                <span>Forger mon projet</span>
              </span>
            )}
          </button>
        </div>

        <p className="text-xs text-center text-[#8892B0]/60 mt-4">
          Réponse garantie sous 24 heures ouvrées. Données protégées par le secret professionnel.
        </p>
      </form>
    </div>
  );
}
