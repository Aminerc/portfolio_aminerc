import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const VibeCoding = () => {
  const tools = [
    { name: "Cursor", description: "Éditeur principal pour le développement rapide" },
    { name: "Claude Code", description: "Assistant IA pour l'accélération du développement" },
    { name: "Claude", description: "Modèle IA pour assistance au développement" },
    { name: "GPT", description: "Modèles GPT pour génération de code et résolution de problèmes" },
    { name: "Sonnet", description: "Modèle IA avancé pour développement assisté" },
    { name: "Opus", description: "Modèle IA pour tâches complexes de développement" },
    { name: "Docker", description: "Conteneurisation et déploiement d'applications" },
    { name: "React / Next.js", description: "Frameworks frontend pour applications web" },
    { name: "Python / FastAPI", description: "Backend et APIs pour outils métier" },
    { name: "SQL / Pandas", description: "Manipulation et analyse de données" },
  ];

  const completedProjects = [
    {
      name: "Sites web statiques et dynamiques",
      description: "Sites web publiés et fonctionnels, orientés finance et calcul",
      tags: [
        { name: "React", color: "blue-text-gradient" },
        { name: "Next.js", color: "green-gradient-text" },
        { name: "Web", color: "pink-text-gradient" },
      ],
      image: null,
      demoLink: null,
      sourceCodeLink: null,
    },
    {
      name: "Outils de calcul financier",
      description: "Calculs de P&L, simulation de coûts, outils de calcul de transport",
      tags: [
        { name: "Python", color: "orange-gradient-text" },
        { name: "Finance", color: "blue-text-gradient" },
        { name: "Calcul", color: "green-gradient-text" },
      ],
      image: null,
      demoLink: null,
      sourceCodeLink: null,
    },
    {
      name: "Plateformes de calcul",
      description: "Outils web fonctionnels pour besoins métier spécifiques",
      tags: [
        { name: "FastAPI", color: "green-gradient-text" },
        { name: "Outils métier", color: "pink-text-gradient" },
        { name: "Web", color: "blue-text-gradient" },
      ],
      image: null,
      demoLink: null,
      sourceCodeLink: null,
    },
  ];

  const inProgressProjects = [
    {
      name: "Application de recrutement",
      description: "Plateforme de matching, automatisation et gestion du processus de recrutement",
      category: "RH",
      status: "En développement",
    },
    {
      name: "Application de rappels / productivité",
      description: "Outil de gestion des tâches et rappels automatisés",
      category: "Productivité",
      status: "En développement",
    },
  ];

  return (
    <>
      <Header useMotion={true} {...config.sections.vibeCoding} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
      >
        {config.sections.vibeCoding.content}
      </motion.p>

      {/* Outils utilisés */}
      <div className="mt-16">
        <h3 className="text-white text-2xl font-bold mb-6">Outils utilisés</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              variants={fadeIn("up", "spring", index * 0.1, 0.75)}
              className="rounded-xl border border-tertiary/60 bg-tertiary/60 p-4 shadow-card transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h4 className="text-white font-semibold text-lg mb-1">{tool.name}</h4>
              <p className="text-secondary text-sm">{tool.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Projets réalisés */}
      <div className="mt-16">
        <h3 className="text-white text-2xl font-bold mb-6">Projets réalisés</h3>
        <div className="flex flex-wrap gap-7">
          {completedProjects.map((project, index) => (
            <motion.div key={project.name} variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
              <Tilt
                glareEnable
                tiltEnable
                tiltMaxAngleX={30}
                tiltMaxAngleY={30}
                glareColor="#aaa6c3"
              >
                <div className="bg-tertiary w-full rounded-2xl p-5 sm:w-[300px]">
                  {project.image && (
                    <div className="relative h-[230px] w-full">
                      <img
                        src={project.image}
                        alt={`Projet ${project.name} - ${project.description.substring(0, 50)}...`}
                        className="h-full w-full rounded-2xl object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className={project.image ? "mt-5" : ""}>
                    <h3 className="text-[24px] font-bold text-white">{project.name}</h3>
                    <p className="text-secondary mt-2 text-[14px]">{project.description}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                        #{tag.name}
                      </p>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-[#915EFF] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-transform duration-200 hover:-translate-y-0.5"
                      >
                        Voir la démo
                      </a>
                    )}
                    {project.sourceCodeLink && (
                      <a
                        href={project.sourceCodeLink}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-secondary/40 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-secondary transition-colors duration-200 hover:border-white hover:text-white"
                      >
                        Voir le code
                      </a>
                    )}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Projets en cours */}
      <div className="mt-16">
        <h3 className="text-white text-2xl font-bold mb-6">Projets en cours</h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {inProgressProjects.map((project, index) => (
            <motion.div
              key={project.name}
              variants={fadeIn("up", "spring", index * 0.2, 0.75)}
              className="rounded-xl border border-tertiary/60 bg-tertiary/60 p-6 shadow-card transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-white font-semibold text-lg">{project.name}</h4>
                <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-[11px] font-medium text-yellow-400">
                  🚧 {project.status}
                </span>
              </div>
              <p className="text-secondary text-sm mb-3">{project.description}</p>
              <span className="inline-block rounded-full border border-[#915EFF]/40 px-3 py-1 text-[11px] font-medium text-secondary/80">
                {project.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Positionnement final */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-12 max-w-3xl text-[17px] leading-[30px]"
      >
        {config.sections.vibeCoding.footer}
      </motion.p>
    </>
  );
};

export default SectionWrapper(VibeCoding, "vibe-coding");
