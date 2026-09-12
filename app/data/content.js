export const services = [
  {
    title: "Développement Web",
    description: "Sites vitrines, plateformes e-commerce, applications SaaS.",
    longDescription:
      "De la simple vitrine à la plateforme SaaS complexe, nous développons des solutions web robustes, évolutives et alignées sur vos objectifs métier.",
    slug: "web-development",
    icon: "code",
    visual: "🌐",
    features: [
      "Sites vitrines responsive",
      "Plateformes e-commerce",
      "Applications SaaS",
      "Progressive Web Apps",
      "APIs RESTful",
      "CMS sur mesure",
    ],
    technologies: ["React", "Next.js", "Node.js", "Laravel", "TailwindCSS"],
  },
  {
    title: "Applications Mobiles",
    description: "Applications iOS, Android et cross-platform.",
    longDescription:
      "Nous concevons des applications mobiles intuitives et performantes, en natif ou en cross-platform, pour offrir une expérience fiable sur tous les écrans.",
    slug: "mobile-apps",
    icon: "mobile",
    visual: "📱",
    features: [
      "Applications iOS et Android",
      "React Native et Flutter",
      "Intégration API",
      "Notifications push",
      "Mode hors-ligne",
      "Publication sur les stores",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
  },
  {
    title: "Solutions Sur Mesure",
    description: "Systèmes métiers, automatisation et intégrations API.",
    longDescription:
      "Nous développons des outils adaptés à vos processus internes pour réduire les tâches répétitives, fluidifier les opérations et donner de la visibilité aux équipes.",
    slug: "custom-solutions",
    icon: "gear",
    visual: "⚙️",
    features: [
      "ERP et CRM personnalisés",
      "Automatisation de tâches",
      "Intégrations API",
      "Portails métier",
      "Tableaux de bord",
      "Reporting avancé",
    ],
    technologies: ["Node.js", "Python", "Django", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Maintenance & Support",
    description: "Optimisation, sécurité et mises à jour continues.",
    longDescription:
      "Nous accompagnons vos produits dans la durée avec un support clair, des améliorations continues et une veille technique pour garder vos applications saines.",
    slug: "maintenance",
    icon: "wrench",
    visual: "🔧",
    features: [
      "Optimisation des performances",
      "Audit de sécurité",
      "Mises à jour régulières",
      "Support technique",
      "Sauvegarde des données",
      "Veille technologique",
    ],
    technologies: ["Monitoring", "Sécurité", "Refactoring", "CI/CD", "Cloud"],
  },
];

export const projects = [
  {
    title: "E-commerce Luxe",
    category: "Web",
    image: "/images/e-commerce-luxe.jpg",
    slug: "ecommerce-luxe",
    stack: ["Next.js", "Shopify", "TailwindCSS", "Stripe"],
    description:
      "Plateforme e-commerce haut de gamme avec une expérience utilisateur premium et des performances optimisées.",
    longDescription:
      "Conception d'une vitrine transactionnelle élégante, pensée pour présenter des produits premium, fluidifier le parcours d'achat et donner à l'équipe une base technique évolutive.",
    features: [
      "Catalogue produits dynamique",
      "Panier d'achat en temps réel",
      "Paiement sécurisé",
      "Dashboard admin",
      "SEO optimisé",
      "Responsive design",
    ],
    year: "2025",
    client: "Marque premium",
  },
  {
    title: "App Fitness",
    category: "Mobile",
    image: null,
    slug: "app-fitness",
    stack: ["React Native", "Node.js", "MongoDB", "Firebase"],
    description:
      "Application de suivi fitness avec coaching personnalisé et programmes d'entraînement adaptatifs.",
    longDescription:
      "Application mobile cross-platform pour suivre les entraînements, garder l'utilisateur engagé et synchroniser ses progrès avec des services santé.",
    features: [
      "Suivi des activités",
      "Programmes personnalisés",
      "Intégration santé",
      "Notifications push",
      "Mode hors-ligne",
      "Tableau de progression",
    ],
    year: "2025",
    client: "Startup bien-être",
  },
  {
    title: "ERP Industriel",
    category: "Sur mesure",
    image: null,
    slug: "erp-industriel",
    stack: ["Django", "PostgreSQL", "React", "Docker"],
    description:
      "Système de gestion complet pour centraliser les opérations d'une entreprise industrielle.",
    longDescription:
      "Solution ERP sur mesure pour suivre les stocks, la production, les équipes et les indicateurs clés depuis une interface unique.",
    features: [
      "Gestion de production",
      "Suivi des stocks",
      "Module RH",
      "Comptabilité intégrée",
      "Reporting avancé",
      "Multi-sites",
    ],
    year: "2024",
    client: "PME industrielle",
  },
  {
    title: "Site Vitrine Design",
    category: "Web",
    image: null,
    slug: "site-vitrine-design",
    stack: ["Vue.js", "TailwindCSS"],
    description:
      "Site vitrine rapide et élégant pour valoriser une marque de services.",
    longDescription:
      "Refonte d'une présence web avec une direction artistique plus claire, un contenu mieux hiérarchisé et des appels à l'action plus lisibles.",
    features: ["Design responsive", "Pages services", "SEO technique", "Formulaire de contact"],
    year: "2024",
    client: "Cabinet de conseil",
  },
  {
    title: "Application de Livraison",
    category: "Mobile",
    image: null,
    slug: "app-livraison",
    stack: ["Flutter", "Firebase"],
    description:
      "Application mobile pour gérer commandes, livreurs et suivi en temps réel.",
    longDescription:
      "Création d'une application opérationnelle pour connecter clients, livreurs et administrateurs autour d'un flux de commande simple.",
    features: ["Suivi en temps réel", "Notifications", "Gestion des commandes", "Tableau admin"],
    year: "2024",
    client: "Service local",
  },
  {
    title: "CRM Sur Mesure",
    category: "Sur mesure",
    image: null,
    slug: "crm-sur-mesure",
    stack: ["Laravel", "MySQL", "Vue.js"],
    description:
      "CRM personnalisé pour structurer le suivi commercial et la relation client.",
    longDescription:
      "Mise en place d'un outil métier pour suivre prospects, opportunités, relances et reporting commercial sans complexité inutile.",
    features: ["Pipeline commercial", "Fiches clients", "Relances", "Exports de rapports"],
    year: "2024",
    client: "Équipe commerciale",
  },
];

export const blogPosts = [
  {
    title: "Les tendances du développement web en 2025",
    excerpt:
      "Frameworks, outils et pratiques à surveiller pour construire des produits web plus rapides et plus maintenables.",
    date: "12 mars 2025",
    image: null,
    slug: "tendances-dev-web-2025",
    category: "Développement",
    readTime: "5 min",
  },
  {
    title: "Comment choisir entre natif et cross-platform ?",
    excerpt:
      "Un guide simple pour choisir l'approche mobile la plus adaptée à votre budget, vos délais et votre produit.",
    date: "5 février 2025",
    image: null,
    slug: "natif-vs-cross-platform",
    category: "Mobile",
    readTime: "7 min",
  },
  {
    title: "L'IA au service de l'expérience utilisateur",
    excerpt:
      "Comment intégrer l'intelligence artificielle sans alourdir l'expérience ni perdre de vue les besoins utilisateurs.",
    date: "20 janvier 2025",
    image: null,
    slug: "ia-ux",
    category: "IA",
    readTime: "6 min",
  },
  {
    title: "Sécuriser votre application web : bonnes pratiques",
    excerpt:
      "Les mesures essentielles à mettre en place pour protéger vos données et réduire les risques courants.",
    date: "8 décembre 2024",
    image: null,
    slug: "securite-app-web",
    category: "Sécurité",
    readTime: "8 min",
  },
  {
    title: "Next.js : les nouveautés à connaître",
    excerpt:
      "Un tour d'horizon des fonctionnalités modernes du framework React préféré des équipes produit.",
    date: "15 novembre 2024",
    image: null,
    slug: "nextjs-nouveautes",
    category: "Développement",
    readTime: "4 min",
  },
  {
    title: "Optimisation des performances web",
    excerpt:
      "Techniques et outils pour rendre vos sites plus rapides, plus agréables et mieux référencés.",
    date: "22 octobre 2024",
    image: null,
    slug: "optimisation-performances-web",
    category: "Performance",
    readTime: "6 min",
  },
];
