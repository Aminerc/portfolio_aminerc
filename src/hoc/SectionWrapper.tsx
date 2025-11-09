import { motion } from "framer-motion";

import { styles } from "../constants/styles";

interface Props {
  Component: React.ElementType;
  idName: string;
}

const SectionWrapper = (
  Component: Props["Component"],
  idName: Props["idName"]
) =>
  function HOC() {
    return (
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} relative z-0 mx-auto max-w-7xl`}
        id={idName}
        aria-label={idName ? `Section ${idName}` : undefined}
      >
        <span className="hash-span" aria-hidden="true">&nbsp;</span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
