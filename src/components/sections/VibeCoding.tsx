import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";

const PROJECT_TAG_COLORS: Record<string, string> = {
  'React': 'blue-text-gradient',
  'Next.js': 'green-gradient-text',
  'Web': 'pink-text-gradient',
  'Python': 'orange-gradient-text',
  'Finance': 'blue-text-gradient',
  'Calcul': 'green-gradient-text',
  'Calculation': 'green-gradient-text',
  'FastAPI': 'green-gradient-text',
  'Outils métier': 'pink-text-gradient',
  'Business tools': 'pink-text-gradient',
};

const VibeCoding = () => {
  const { t } = useTranslation();
  
  const toolKeys = ['cursor', 'claudeCode', 'claude', 'gpt', 'sonnet', 'opus', 'docker', 'react', 'python', 'sql'] as const;
  const tools = toolKeys.map((key) => ({
    name: t(`vibeCoding.tools.${key}.name`),
    description: t(`vibeCoding.tools.${key}.description`),
  }));

  const completedProjectKeys = ['staticWeb', 'financialTools', 'calculationPlatforms'] as const;
  const completedProjects = completedProjectKeys.map((key) => {
    const tags = (t(`vibeCoding.completedProjects.${key}.tags`, { returnObjects: true }) as string[]) || [];
    return {
      name: t(`vibeCoding.completedProjects.${key}.name`),
      description: t(`vibeCoding.completedProjects.${key}.description`),
      tags: tags.map((tag) => ({
        name: tag,
        color: PROJECT_TAG_COLORS[tag] || 'grey-gradient-text',
      })),
      image: null,
      demoLink: null,
      sourceCodeLink: null,
    };
  });

  const ongoingProjectKeys = ['recruitment', 'productivity'] as const;
  const inProgressProjects = ongoingProjectKeys.map((key) => ({
    name: t(`vibeCoding.ongoingProjects.${key}.name`),
    description: t(`vibeCoding.ongoingProjects.${key}.description`),
    category: t(`vibeCoding.ongoingProjects.${key}.category`),
    status: t("vibeCoding.inDevelopment"),
  }));


  return (
    <>
      <Header useMotion={true} p={t("vibeCoding.subtitle")} h2={t("vibeCoding.title")} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
      >
        {t("vibeCoding.content")}
      </motion.p>

      {/* Outils utilisés */}
      <div className="mt-16">
        <h3 className="text-white text-2xl font-bold mb-6">{t("vibeCoding.toolsTitle")}</h3>
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
        <h3 className="text-white text-2xl font-bold mb-6">{t("vibeCoding.completedProjectsTitle")}</h3>
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
                        {t("vibeCoding.viewDemo")}
                      </a>
                    )}
                    {project.sourceCodeLink && (
                      <a
                        href={project.sourceCodeLink}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-secondary/40 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-secondary transition-colors duration-200 hover:border-white hover:text-white"
                      >
                        {t("vibeCoding.viewCode")}
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
        <h3 className="text-white text-2xl font-bold mb-6">{t("vibeCoding.ongoingProjectsTitle")}</h3>
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
                  🚧 {t("vibeCoding.inDevelopment")}
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
        {t("vibeCoding.footer")}
      </motion.p>
    </>
  );
};

export default SectionWrapper(VibeCoding, "vibe-coding");
