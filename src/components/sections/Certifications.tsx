import { useTranslation } from "react-i18next";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { getTranslatedCertifications } from "../../utils/i18nHelpers";

const Certifications = () => {
  const { t } = useTranslation();
  const certifications = getTranslatedCertifications(t);
  
  return (
    <>
      <Header
        useMotion={false}
        p={t("certifications.subtitle")}
        h2={t("certifications.title")}
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {certifications.map((certification) => (
          <article
            key={certification.title}
            className="flex flex-col gap-4 rounded-2xl border border-tertiary/60 bg-tertiary/40 p-6 shadow-card"
          >
            <header className="flex items-start gap-4">
              {certification.icon && (
                <img
                  src={certification.icon}
                  alt={`Logo ${certification.issuer}`}
                  className="h-12 w-12 rounded-lg bg-black-100/60 object-contain p-2"
                  loading="lazy"
                />
              )}
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {certification.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-secondary/80">
                  {certification.issuer} &middot; {certification.date}
                </p>
              </div>
            </header>
            <p className="text-sm leading-relaxed text-secondary">
              {certification.description}
            </p>
            {certification.url && (
              <div className="flex flex-wrap gap-3">
                <a
                  href={certification.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#915EFF] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-transform duration-200 hover:-translate-y-0.5"
                >
                  {t("certifications.viewCertification")}
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
