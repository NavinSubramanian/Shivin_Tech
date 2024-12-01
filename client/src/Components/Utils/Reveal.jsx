// Reveal.jsx
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Reveal = ({ children, animation = "fadeIn", duration = 0.6, classn }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  const animations = {
    fadeIn: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    slideFromLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    slideFromRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
  };

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animations[animation]}
      transition={{ duration }}
      className={`${classn}`}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
