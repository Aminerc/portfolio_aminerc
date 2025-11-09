import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
/*import { ComputersCanvas } from "../canvas"; */
import { config } from "../../constants/config";
import { pdp } from "../../assets";

const Hero = () => {
  return (
    <section className={`relative mx-auto h-screen w-full`} aria-label="Section d'accueil">
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 animate-fadeIn">
          <div className="relative group shrink-0">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#915EFF] shadow-lg transition-transform duration-300 group-hover:scale-105">
              <img 
                src={pdp}
                alt="Amine Ouardi - Data Analyst et Consultant EPM" 
                className="w-full h-full object-cover"
                loading="eager"
                style={{
                  objectFit: 'cover',
                  aspectRatio: '1/1',
                  objectPosition: 'center'
                }}
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-[#915EFF] rounded-full w-10 h-10 flex items-center justify-center transform transition-transform duration-300 hover:scale-110 cursor-pointer">
              <span className="text-white text-xl" role="img" aria-label="Tech Expert">👨‍💻</span>
            </div>
          </div>
          
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              <span className="text-[#915EFF]">{config.hero.name}</span>
            </h1>
            <p className={`${styles.heroSubText} text-white-100 mt-2`}>
              {config.hero.p[0]}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={config.html.cvLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#915EFF] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-transform duration-200 hover:-translate-y-0.5"
              >
                Télécharger mon CV
              </a>
              <a
                href="#contact"
                className="rounded-full border border-secondary/50 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-secondary transition-colors duration-200 hover:border-white hover:text-white"
              >
                Me contacter
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
