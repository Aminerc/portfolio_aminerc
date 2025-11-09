import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
  TCertification,
  TSocialLink,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  anef,
  morpheus,
  snagz,
  powerbi,
  sql,
  powerquery,
  talend,
  python,
  excel,
  projetrh,
  projetsuivibudg,
  projetcallcenter,
  datascientest,
  iscod,
  projetvelos,
  n8n,
  tosa,
  certificationTosaExcel,
  certificationIscodPdf,
  iscodCertificationLogo,
  certificationDatascientest,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "Profil",
  },
  {
    id: "work",
    title: "Expérience pro",
  },
  {
    id: "tech",
    title: "Technologies",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "works",
    title: "Projets",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Finance",
    icon: web,
  },
  {
    title: "Data",
    icon: mobile,
  },
  {
    title: "Business Intelligence",
    icon: backend,
  },
  {
    title: "Intelligence Artificielle",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Excel & Power Pivot",
    icon: excel,
    level: "Expert",
    usage:
      "Mise en place d’outils décisionnels et dashboards financiers / extra-financiers, simulations et scénarios.",
  },
  {
    name: "Power Query",
    icon: powerquery,
    level: "Avancé",
    usage:
      "Collecte automatisée et transformation des données multi-sources (ERP, SaaS, APIs), industrialisation de fichiers.",
  },
  {
    name: "Power BI",
    icon: powerbi,
    level: "Avancé",
    usage:
      "Conception de rapports interactifs avec storytelling data, sécurité Row Level Security (RLS) et gouvernance.",
  },
  {
    name: "SQL",
    icon: sql,
    level: "Avancé",
    usage:
      "Structuration de bases, requêtes complexes, optimisation des flux et préparation des données pour le pilotage.",
  },
  {
    name: "Power Automate & n8n",
    icon: n8n,
    level: "Intermédiaire",
    usage:
      "Automatisation de workflows métiers, notifications temps réel et intégrations low-code/no-code.",
  },
  {
    name: "Python",
    icon: python,
    level: "Intermédiaire",
    usage:
      "Scripts d’automatisation, analyses statistiques, prototypage d’applications data (Pandas, Streamlit).",
  },
  {
    name: "Talend & ETL",
    icon: talend,
    level: "Débutant",
    usage:
      "Intégration de données et création de pipelines décisionnels pour alimenter les outils BI.",
  },
];

const experiences: TExperience[] = [
  {
    title: "Automatisation financière & Data | BI",
    companyName: "SNAgz",
    icon: snagz,
    iconBg: "#E6DEDD",
    date: "Mai 2025 - Présent",
    points: [
      "Mise en place et automatisation des processus financiers (P&L automatisé à ~90%, calcul des marges, provisions).",
      "Structuration d'un système de suivi de la rentabilité par projet/vente et forecasting du chiffre d'affaires.",
      "Restructuration de l'ERP et automatisation des flux comptables via Power Query / SQL.",
      "Déploiement de dashboards Power BI financiers et extra‑financiers pour un pilotage opérationnel et décisionnel.",
      "Résultats : vision automatisée des marges sur 5 activités principales; structuration complète des coûts directs et indirects; plan de réduction des coûts piloté via tableaux de bord."
    ],
  },
  {
    title: "Contrôleur de Gestion",
    companyName: "ANEF 03-63",
    icon: anef,
    iconBg: "#E6DEDD",
    date: "Janvier 2023 - Mai 2025",
    points: [
      "Suivi budgétaires et corrections/analyse des écarts.",
      "Création de tableaux de bords, fichiers automatisés dediés à la gestion, suivi des finances et des ressources humaines.",
      "Mise en plage et gestion de la base de données comptable sous SQL en intégrant les données sur Excel via PowerQuery et SQL.",
      "Mise en place et structuration de la base de données du progiciel de gestion budgétaire DIR-IPS."
    ],
  },
  {
    title: "Concepteur de fichiers standards / sur mésure Excel",
    companyName: "Morpheus Formation",
    icon: morpheus,
    iconBg: "#E6DEDD",
    date: "Octobre 2024 - Octobre 2025",
    points: [
      "Création de fichiers standards / modèles de fichiers Excel no code en libre service ou dediés à la vente",
      "Création de fichiers sur mesure à la demande des clients : Finance, Associations, Suivi RH..."
    ],
  },
  {
    title: "Formation Data Analyst",
    companyName: "Datascientest.com",
    icon: datascientest,
    iconBg: "#E6DEDD",
    date: "Septembre 2024 - Avril 2025",
    points: [
      "Analyse et gestion des données avec Python via Pandas, NumPy, Scikit-learn, PySpark pour le preprocessing et la manipulation de dataframes.",
      "Visualisation avec Matplotlib, Seaborn, Plotly, ggplot, Bokeh pour des graphiques statistiques et interactifs.",
      "Machine learning avec Scikit-learn, TensorFlow, PyTorch, XGBoost, LightGBM pour la prédiction et la modélisation.",
      "Bases de données : SQL, normalisation, structuration avec PostgreSQL, MySQL, SQLite pour une gestion optimisée des données.",
    ],
  },
  {
    title: "Executive Bachelor : Comptabilité Finance et Gestion",
    companyName: "ISCOD",
    icon: iscod,
    iconBg: "#E6DEDD",
    date: "Septembre 2023 - Août 2024",
    points: [
      "Comptabilité : principes, normes, réglementations et obligations comptables. ",
      "Finance d’entreprise : reporting, forecasting, marges, rentabilité, analyse des coûts et des écarts.",
      "Gestion financière : élaboration de dashboards et reportings pour le suivi de la performance.",
      "Droit des entreprises : bases du droit du travail, réglementations et cadre juridique des sociétés.",
      "Marketing & communication : stratégies de communication, publicité, gestion de marque et relation client.",
      "Business English : maîtrise des terminologies, négociation, présentations et échanges professionnels en anglais."
    ],
  },
];
const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Amine a pu me construire un fichier Excel pour un suivi de l'activité d'un hôpital à Ryiad. En quelques semaines c'était bouclé.",
    name: "Hussam F.",
    designation: "Finance Manager",
    company: "King Abdullah Hospital Center",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Suivi et gestion budgétaire",
    description:
      `Fichier Excel pour le suivi budgétaire et la prévision sur 1 ans en fonction de variables et API (inflation).
      Les données comptables sont issues automatiquement via des requêtes Power Query, interrogeant la base de données du progiciel comptable.`,
    tags: [
      {
        name: "Excel",
        color: "green-gradient-text",
      },
      {
        name: "sql",
        color: "grey-gradient-text",
      },
      {
        name: "Finance",
        color: "blue-text-gradient",
      },
    ],
    image: projetsuivibudg,
    demoLink: "https://youtu.be/NRX0Rryb45s?si=9KuPAPcuvhBnH1dp",
  },
  {
    name: "Tableau de bord RH",
    description:
      `Tableau de bord de suivi de personnel et évolutions de la population au sein de l'ANEF 03-63.
      Les données sont integrées via des requêtes Power Query, en lien avec des APIs liées au 'SaaS' de la structure`,
    tags: [
      {
        name: "Excel",
        color: "green-gradient-text",
      },
      {
        name: "PowerQuery",
        color: "white-gradient-text",
      },
      {
        name: "RH",
        color: "pink-text-gradient",
      },
    ],
    image: projetrh,
    demoLink: "https://youtu.be/sMP8HLD4v_M?si=Yr3COVXv4Jf3spFA",
  },
  {
    name: "Performance Dashboard",
    description:
      `Rapport PowerBi pour suivre les performances d'un Call Center subdivisé en 3 catégories : performances générales, performances des employés et performances des managers.
      Données issues de differents datasets sous differentes formes (texte, csv, bdd externe...)`,
    tags: [
      {
        name: "PowerBi",
        color: "yellow-gradient-text",
      },
      {
        name: "PowerQuery",
        color: "white-gradient-text",
      },
      {
        name: "Data",
        color: "grey-gradient-text",
      },
    ],
    image: projetcallcenter,
    demoLink: "https://www.youtube.com/watch?v=DglGvOUYmvA&ab_channel=AminercIT",
  },
  {
    name: "Trafic Cyclisme Paris",
    description:
      `Ce projet analyse l’évolution du trafic vélo à Paris sur plusieurs années, en lien avec des événements exceptionnels (COVID, fêtes nationales) et la météo, pour mieux comprendre les tendances et optimiser l’aménagement urbain.`,
    tags: [
      {
        name: "Python",
        color: "orange-gradient-text",
      },
      {
        name: "Streamlit",
        color: "red-gradient-text",
      },
      {
        name: "Data Analysis",
        color: "grey-gradient-text",
      },
    ],
    image: projetvelos,
    sourceCodeLink: "https://github.com/aminerc",
  },
];

const certifications: TCertification[] = [
  {
    title: "TOSA Excel",
    issuer: "Isograd",
    date: "Novembre 2025",
    description:
      "Score 913 / 1000 – Niveau Expert. Conaissance et utilisation du logiciel est maitrisée.",
    icon: tosa,
    url: certificationTosaExcel,
  },
  {
    title: "Data Analyst",
    issuer: "Datascientest.com",
    date: "Mai 2024",
    description:
      "Programme intensif couvrant Python, machine learning, visualisation et industrialisation des pipelines data.",
    icon: datascientest,
    url: certificationDatascientest,
  },
  {
    title: "Executive Bachelor Comptabilité, Finance & Gestion",
    issuer: "ISCOD",
    date: "2024",
    description:
      "Spécialisation en pilotage de la performance, finance d’entreprise, droit et stratégie marketing.",
    icon: iscodCertificationLogo,
    url: certificationIscodPdf,
  },
];

const socials: TSocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ouardiamine/",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/Aminerc",
    icon: "github",
  },
];

export { services, technologies, experiences, testimonials, projects, certifications, socials };
