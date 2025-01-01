import { Link } from "react-router-dom";
import { MoveUpRight, ArrowRight } from "lucide-react";
import projects from "../data/projects.json";
import { motion, AnimatePresence } from "framer-motion";
function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Stagger effect
      },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };
  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-y-[80px]"
      >
        <motion.header>
          <motion.div className="flex flex-col gap-y-16">
            <motion.div className="flex flex-col gap-4">
              <motion.h1
                variants={cardVariants}
                className="text-gray-800 text-2xl text-balance font-semibold"
              >
                Abhishek KC
              </motion.h1>
              <motion.p
                variants={cardVariants}
                className="text-gray-500 md:text-lg"
              >
                Software designer focused on the intersection of design, UI
                development and micro-interactions to make products feel alive.
              </motion.p>
              <motion.p
                variants={cardVariants}
                className="text-gray-500 md:text-lg"
              >
                Currently at{" "}
                <a
                  href="https://www.lyrebirdhealth.com/au"
                  className="text-gray-800 font-medium"
                >
                  Lyrebird Health
                </a>
                , shaping the future of healthcare by crafting experiences that
                improve clinical workflows.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.header>

        <motion.div className="flex flex-col gap-y-[80px]">
          <motion.div className="flex flex-col gap-6">
            <motion.p
              variants={cardVariants}
              className="text-xs text-gray-400 uppercase tracking-widest"
            >
              Projects
            </motion.p>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-y-8">
                {projects.map((project) => (
                  <motion.div key={project.title} variants={cardVariants}>
                    {project.status === "WIP" ? (
                      <div className="flex flex-col gap-2 p-4 md:p-6 bg-white card rounded-2xl transition duration-300 cursor-not-allowed">
                        <div className="flex items-start justify-between">
                          <h3 className="md:text-lg capitalize font-medium">
                            {project.title}{" "}
                            <span className="text-gray-400 font-normal">
                              · {project.year}
                            </span>
                          </h3>
                          <div className="rounded-full tracking-widest bg-amber-50 text-amber-600 px-2 gap-1.5 h-6 flex items-center text-sm font-medium">
                            <div className="small-circle"></div>
                            {project.status}
                          </div>
                        </div>
                        <div className="flex flex-col gap-4">
                          <p className="md:text-lg text-gray-500">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={project.link}
                        className="md:text-lg flex flex-col gap-2 p-4 md:p-6 bg-white card rounded-2xl transition duration-300"
                      >
                        <div className="flex items-start justify-between">
                          <h3 className="md:text-lg capitalize font-medium">
                            {project.title}{" "}
                            <span className="text-gray-400 font-normal">
                              · {project.year}
                            </span>
                          </h3>
                          <MoveUpRight size={20} className="text-gray-400" />
                        </div>
                        <div className="flex flex-col gap-4">
                          <p className="md:text-lg text-gray-500 font-normal">
                            {project.description}
                          </p>
                        </div>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.footer>
            <motion.div className="flex flex-col gap-4">
              <motion.p
                variants={cardVariants}
                className="text-xs text-gray-400 uppercase tracking-widest"
              >
                Connect
              </motion.p>
              <motion.div variants={cardVariants} className="flex gap-8">
                <a
                  href="mailto:sendtokcabhi@gmail.com"
                  className="md:text-lg font-medium"
                >
                  Email
                </a>

                <a
                  href="https://www.linkedin.com/in/abhishekkc/"
                  className="md:text-lg font-medium"
                >
                  Linkedin
                </a>

                <a
                  href="https://github.com/casicodes"
                  className="md:text-lg font-medium"
                >
                  Github
                </a>

                <a
                  href="https://drive.google.com/file/d/1wfwL_ZnZ_bUw_1md56VBe8LyUcnBCWIR/view?usp=sharing"
                  className="md:text-lg font-medium"
                >
                  Resume
                </a>
              </motion.div>
            </motion.div>
          </motion.footer>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Home;
