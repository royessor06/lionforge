# Audit du projet LionForge

## État actuel

Le projet est une vitrine Next.js pour LionForge. La base visuelle est solide, mais le site avait plusieurs signes de maquette non finalisée : textes encodés de travers, données dupliquées, routes blog manquantes, assets référencés inexistants et identifiants EmailJS en dur.

## Corrections appliquées

- Encodage français corrigé dans les fichiers source et documentation.
- Données services, projets et blog centralisées dans `app/data/content.js`.
- Pages services, projets et blog branchées sur cette source commune.
- Route dynamique `app/blog/[slug]/page.jsx` ajoutée pour éviter les liens blog en 404.
- Métadonnées et favicon alignés sur les assets réellement présents dans `public/`.
- Police Google externe remplacée par une pile système pour éviter un build bloqué par le réseau.
- Particules de la home rendues déterministes pour éviter les différences d'hydratation.
- Placeholders les plus visibles de la page À propos remplacés par un contenu plus crédible.
- Liens sociaux vides du footer remplacés par des informations de contact.
- Configuration EmailJS déplacée vers des variables d'environnement publiques Next.js.

## Points à améliorer ensuite

- Remplacer les placeholders visuels restants par de vraies images de projets.
- Rédiger de vrais articles de blog ou masquer la pagination fictive.
- Ajouter des métadonnées spécifiques par page dynamique.
- Ajouter une protection anti-spam au formulaire.
- Nettoyer les dépendances inutilisées après vérification visuelle complète.
