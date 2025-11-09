import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";

const Tech = () => {
  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="flex flex-col gap-4 rounded-2xl border border-tertiary/60 bg-tertiary/60 p-6 shadow-card transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-black-100/60">
                <img
                  src={technology.icon}
                  alt={`Icône ${technology.name}`}
                  className="h-10 w-10 object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold text-white">
                    {technology.name}
                  </h3>
                  <span className="rounded-full border border-[#915EFF]/40 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-secondary/80">
                    {technology.level}
                  </span>
                </div>
                <p className="text-sm text-secondary leading-relaxed">
                  {technology.usage}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
