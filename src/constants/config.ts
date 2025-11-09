type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
    cvLink: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Amine Ouardi Portfolio",
    fullName: "Amine Ouardi",
    email: "aminerc.business@outlook.com",
    cvLink: "/documents/CV_Amine_Ouardi.pdf",
  },
  hero: {
    name: "Amine Ouardi",
    p: ["Là où la technologie rencontre la finance, naissent les outils qui permettent de piloter efficacement la performance et les décisions."],
  },
  contact: {
    p: "Une question ? Une proposition ?",
    h2: "Contact",
    form: {
      name: {
        span: "Nom Complet",
        placeholder: "Arnaud Dupont...",
      },
      email: { span: "Email", placeholder: "email@exemple.com" },
      message: {
        span: "Message",
        placeholder: "Votre message ici...",
      },
    },
  },
  sections: {
    about: {
      p: "Profil",
      h2: "Introduction",
      content: 
      `Analyste et concepteur d’outils de pilotage financier, j’interviens à la croisée de la finance et de la technologie pour structurer, automatiser et rendre les données exploitables.
Diplômé en comptabilité et gestion, puis formé en data analyse et intelligence artificielle, j’ai évolué vers un rôle axé sur la transformation financière, la business intelligence et le conseil en performance.
Mon approche allie compréhension des enjeux financiers, maîtrise des données et vision technologique afin d’accompagner les entreprises dans la modernisation de leur pilotage, l’automatisation de leurs processus et la fiabilisation de leurs analyses.
J’ai conçu et déployé des modèles financiers dynamiques, des tableaux de bord interactifs et des systèmes de suivi automatisés permettant aux décideurs de mieux comprendre, anticiper et piloter leur activité.
J’utilise des outils tels que Excel avancé, Power Query, Power BI, VBA, SQL, Python, Power Automate et n8n, pour développer des solutions sur mesure qui allient précision, rapidité et valeur ajoutée décisionnelle.`
    },
    experience: {
      p: "Mon parcours profesionnel jusqu'à présent",
      h2: "Parcours pro",

    },
  feedbacks: {
    p: "Ceux qui m'ont fait confiance...",
    h2: "Avis clients",
    
    },
    works: {
      p: "Mes réalisations",
      h2: "Projets",
      content: `Les réalisations présentées ci-dessous sont issues de cas concrets et de défis rencontrés lors de mes expériences professionnelles.
      Mes projets apportent des solutions innovantes aux problématiques métiers critiques (pilotage financier, gestion de la masse salariale, suivi RH...)
      tout en démontrant ma capacité à concevoir et déployer des outils performants qui améliorent le quotidien de chacun.`
      ,
    },
  },
};