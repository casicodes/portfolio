import React from "react";
import { motion } from "framer-motion";

const Logo = ({ text, onClick }) => {
  const letterVariants = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: (i) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      className="relative inline-block cursor-pointer"
      onClick={onClick}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          custom={index}
          className="inline-block text-gray-800 text-2xl text-balance font-semibold"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default Logo;
