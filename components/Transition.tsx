import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

const Transition = ({ children }) => {
  const { pathname } = useRouter();
  const variants = {
    out: {
      opacity: 0,
      y: 40,
    },
    in: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      key={pathname}
      initial={variants.out}
      animate={variants.in}
      exit={variants.out}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};

export default Transition;
