import { Variants } from "framer-motion";

export const fadeIn = (direction: "up" | "down"): Variants => {
  return {
    initial: {
      y: direction === "up" ? 40 : -60,
      opacity: 0,
    },

    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
};

export const fallIn: Variants = {
  initial: {
    y: -1000,
    x: "-50%",
  },

  animate: {
    y: "-50%",
    x: "-50%",
    transition: {
      delay: 1,
      duration: 0.5,
      type: "spring",
    },
  },
};

export const bounce: Variants = {
  initial: {},
  animate: {
    y: ["-15%", "0%", "-15%"],
    transition: {
      duration: 1.3,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

export const fromSide = (direction: "left" | "right"): Variants => {
  return {
    initial: {
      opacity: 0,
      x: (direction === "left" ? -100 : 100)
    },

    animate:{
      opacity: .8,
      x: 0,
      transition:{
        duration: .5,
        ease: "easeIn"
      }
    }
  };
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
