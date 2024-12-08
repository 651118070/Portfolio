import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaJs,
  FaDatabase,
  FaDocker,
  FaPython,
} from "react-icons/fa";
import {
  SiMongodb,
  SiNestjs,
  SiPostgresql,
  SiNextdotjs,
  SiPhp,
  SiFlutter,
  SiAppwrite,
  SiTensorflow,
  SiLaravel,
} from "react-icons/si";

const techIcons = [
  { icon: <FaJs />, color: "#f7df1e" },
  { icon: <FaReact />, color: "#61DBFB" },
  { icon: <SiNextdotjs />, color: "#000000" },
  { icon: <FaNodeJs />, color: "#68A063" },
  { icon: <SiNestjs />, color: "#E0234E" },
  { icon: <SiMongodb />, color: "#47A248" },
  { icon: <SiPostgresql />, color: "#336791" },
  { icon: <FaAws />, color: "#FF9900" },
  { icon: <FaDatabase />, color: "#800080" },
  { icon: <SiPhp />, color: "#787CB5" },
  { icon: <FaDocker />, color: "#2496ED" },
  { icon: <SiFlutter />, color: "#02569B" },
  { icon: <SiAppwrite />, color: "#F02E65" },
  { icon: <FaPython />, color: "#3776AB" },
  { icon: <SiTensorflow />, color: "#FF6F00" },
  { icon: <SiLaravel />, color: "#FF2D20" },
];

const globeVariants = {
  animate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 12,
      ease: "linear",
    },
  },
};

const iconVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: (i) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

const TechnologiesGlobe = () => {
  return (
    <section className="tech-globe-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
       className=" text-3xl font-bold font-orbitron bg-clip-text text-transparent bg-gradient-to-r from-[#4169E1] to-blue-300  mb-12 text-center dark:text-white"
      >
        Technologies I Use
      </motion.h2>

      <motion.div
        className="globe"
        variants={globeVariants}
        animate="animate"
      >
        {techIcons.map((tech, i) => (
          <motion.div
            key={i}
            className="tech-icon"
            variants={iconVariants}
            custom={i}
            initial="initial"
            animate="animate"
            style={{ color: tech.color }}
          >
            {tech.icon}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechnologiesGlobe;
