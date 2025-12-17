import { useTranslation } from "react-i18next";
import { styles } from "../../constants/styles";
/*import { ComputersCanvas } from "../canvas"; */
import { config } from "../../constants/config";
import { pdp } from "../../assets";

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section className={`relative mx-auto min-h-[60vh] w-full flex items-center pb-8`} aria-label="Section d'accueil">
      <div
        className={`w-full pt-24 pb-12 mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-32 w-1 sm:h-64" />
        </div>

        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 animate-fadeIn">
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
              <span className="text-[#915EFF]">{t("hero.name")}</span>
            </h1>
            <p className={`${styles.heroSubText} text-white-100 mt-2`}>
              {t("hero.subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`${import.meta.env.BASE_URL}${config.html.cvLink.substring(1)}`}
                download="CV_Amine_Ouardi_12_2025.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#915EFF] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-transform duration-200 hover:-translate-y-0.5"
              >
                {t("hero.downloadCV")}
              </a>
              <a
                href="#contact"
                className="rounded-full border border-secondary/50 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-secondary transition-colors duration-200 hover:border-white hover:text-white"
              >
                {t("hero.contactMe")}
              </a>
              <a
                href="https://calendly.com/aminerc-business/30min"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border-2 border-[#915EFF] bg-[#915EFF]/20 hover:bg-[#915EFF] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                {t("hero.bookCall")}
              </a>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;
