// Ce fichier utilise generateStaticParams pour générer les pages dynamiquement
export async function generateStaticParams() {
  const services = [
    { slug: "web-development" },
    { slug: "mobile-apps" },
    { slug: "custom-solutions" },
    { slug: "maintenance" },
  ];
  return services.map((service) => ({ slug: service.slug }));
}

const serviceData = {
  "web-development": {
    title: "Développement Web",
    description: "Nous créons des sites web et applications web sur mesure, performants et sécurisés.",
    features: [
      "Sites vitrines responsive",
      "Plateformes e‑commerce",
      "Applications SaaS",
      "Progressive Web Apps (PWA)",
    ],
    technologies: ["React", "Next.js", "Node.js", "Laravel", "Symfony"],
  },
  "mobile-apps": {
    title: "Applications Mobiles",
    description: "Développement d’applications mobiles natives et cross‑platform pour iOS et Android.",
    features: [
      "Applications iOS (Swift)",
      "Applications Android (Kotlin)",
      "Cross‑platform (React Native, Flutter)",
      "Intégration API",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  "custom-solutions": {
    title: "Solutions Sur Mesure",
    description: "Des logiciels adaptés à vos processus métier pour gagner en efficacité.",
    features: [
      "Systèmes de gestion (ERP, CRM)",
      "Automatisation de tâches",
      "Intégrations API",
      "Portails métier",
    ],
    technologies: ["Node.js", "Python", "Django", "PostgreSQL", "MongoDB"],
  },
  "maintenance": {
    title: "Maintenance & Support",
    description: "Assurez la pérennité de vos applications avec nos contrats de maintenance.",
    features: [
      "Optimisation des performances",
      "Audit de sécurité",
      "Mises à jour régulières",
      "Support technique",
    ],
    technologies: ["Monitoring", "Sécurité", "Refactoring"],
  },
};

export default function ServiceDetail({ params }) {
  const service = serviceData[params.slug];
  if (!service) return <div>Service non trouvé</div>;

  return (
    <div className="min-h-screen bg-lion-dark text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-lion-gold mb-6">{service.title}</h1>
        <p className="text-xl text-lion-light mb-10">{service.description}</p>

        <h2 className="text-3xl font-semibold text-lion-gold mb-4">Caractéristiques</h2>
        <ul className="list-disc list-inside space-y-2 text-lion-light mb-10">
          {service.features.map((feat, i) => (
            <li key={i}>{feat}</li>
          ))}
        </ul>

        <h2 className="text-3xl font-semibold text-lion-gold mb-4">Technologies utilisées</h2>
        <div className="flex flex-wrap gap-3">
          {service.technologies.map((tech, i) => (
            <span key={i} className="bg-lion-gold/10 border border-lion-gold/30 text-lion-gold px-4 py-2 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}