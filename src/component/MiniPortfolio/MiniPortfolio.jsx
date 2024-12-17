import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Mail,
  Github,
  Info,
  ArrowLeft,
  BriefcaseBusiness,
  ArrowDownToLine,
} from "lucide-react";
import p1 from "../../assets/3-1.png";
import p2 from "../../assets/2-3.png";
import p3 from "../../assets/1-1.png";

function MiniPortfolio() {
  const [state, setState] = useState({
    expand: false,
    work: false,
    info: false,
  });

  function handleBack() {
    setState({ expand: true, work: false });
  }

  function toggleExpand() {
    setState({ expand: !state.expand, work: false, info: false });
  }

  function goToWork() {
    setState({ expand: false, work: true });
  }
  function goToInfo() {
    setState({ expand: false, work: false, info: true });
  }
  const buttonTap = {
    scale: 0.8,
  };
  const mainTransition = {
    type: "spring",
    stiffness: 320,
    damping: 20,
    mass: 0.01,
    duration: 0.25,
  };

  return (
    <div className="playground flex flex-col gap-6">
      <div className="playground-desc">
        <h1 className="text-gray-800 font-medium text-lg">Mini Portfolio</h1>
        <p className="font-light text-gray-500 text-balance">
          Inspired by Apple’s Dynamic Island for its use of minimal real estate.
        </p>
      </div>
      <div className="playground-area rounded-2xl min-h-[500px] bg-white border-dashed border border-gray-300 gap-4 flex flex-col items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {state.work ? (
            <motion.div
              layoutId="dynamic"

              // variants={containerVariants}
              // initial="initial"
              // animate="animate"
              // exit="exit"
              // transition={mainTransition}
            >
              <motion.div
                style={{ borderRadius: 24 }}
                className="flex flex-col justify-between gap-3 border shadow p-3 relative w-[320px]"
              >
                <motion.button
                  layout
                  key="back"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -10, opacity: 0 }}
                  whileTap={buttonTap}
                  transition={mainTransition}
                  className="w-[48px] h-[48px] flex items-center justify-center bg-gray-100 rounded-full"
                  onClick={handleBack}
                >
                  <ChevronLeft />
                </motion.button>
                <motion.div
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ delay: 0.2 }}
                  layout
                  className="flex flex-col rounded-xl "
                >
                  <div className="flex gap-1.5 py-1.5 rounded-xl text-lg leading-snug hover:cursor-pointer hover:bg-gray-50 hover:px-2 transition-all duration-300">
                    <img
                      src={p1}
                      alt=""
                      className="w-[80px] object-cover rounded-lg"
                    />
                    <div className="flex flex-col justify-center">
                      <h3 className="text-[16px] text-balance">
                        Reducing onboarding drop-off by 18%
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-1.5 py-1.5 rounded-xl text-lg leading-snug hover:cursor-pointer hover:bg-gray-50 hover:px-2 transition-all duration-300">
                    <img
                      src={p2}
                      alt=""
                      className="w-[80px] object-cover rounded-lg"
                    />
                    <div className="flex flex-col justify-center">
                      <h3 className="text-[16px] text-balance">
                        Increasing average order value by 15%
                      </h3>
                    </div>
                  </div>

                  <div className="flex gap-1.5 py-1.5 rounded-xl text-lg leading-snug hover:cursor-pointer hover:bg-gray-50 hover:px-2 transition-all duration-300">
                    <img
                      src={p3}
                      alt=""
                      className="w-[80px] object-cover rounded-lg"
                    />
                    <div className="flex flex-col justify-center">
                      <h3 className="text-[16px] text-balance">
                        Boosting preventive care engagement by 33%
                      </h3>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ) : state.info ? (
            <motion.div
              layoutId="dynamic"
              className="info-container flex flex-col justify-between gap-3 border shadow p-3 relative w-[320px]"
              // initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, y: 0 }}
              // exit={{ opacity: 0, y: 20 }}
              // transition={fadeTransition}
            >
              <motion.button
                layout
                key="back"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -10, opacity: 0 }}
                whileTap={buttonTap}
                transition={mainTransition}
                className="w-[48px] h-[48px] flex items-center justify-center bg-gray-100 rounded-full"
                onClick={handleBack}
              >
                <ArrowLeft size={24} />
              </motion.button>
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
                layout
                className="pb-1 rounded-xl flex flex-col gap-3"
              >
                <p className="text-gray-600">
                  I am a designer who loves to code. I focus on visual details
                  and interaction design.
                </p>
                <p className="text-gray-600">
                  I believe a focus on craftsmanship and attention to detail
                  will be the key differentiators that set products and
                  experiences apart.
                </p>

                <div className="flex gap-2 mt-2">
                  <motion.a
                    whileTap={buttonTap}
                    href="https://www.linkedin.com/in/abhishekkc/"
                    className="bg-gray-100 text-center grow p-2 rounded-full hover:bg-gray-200"
                  >
                    LinkedIn
                  </motion.a>
                  <motion.a
                    whileTap={buttonTap}
                    href="https://www.linkedin.com/in/abhishekkc/"
                    className="bg-gray-100 text-center grow p-2 rounded-full hover:bg-gray-200"
                  >
                    Twitter
                  </motion.a>
                  <motion.a
                    whileTap={buttonTap}
                    href="https://www.linkedin.com/in/abhishekkc/"
                    className="bg-gray-100 text-center grow p-2 rounded-full hover:bg-gray-200"
                  >
                    Resume
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              layoutId="dynamic"
              // key="main"
              // variants={containerVariants}
              // initial="initial"
              // animate="animate"
              // exit="exit"
              // transition={mainTransition}
              className="relative flex justify-between items-center gap-1 min-w-[320px] border shadow p-2"
              style={{ borderRadius: 32, height: 66 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {state.expand ? (
                  <motion.button
                    layout
                    key="back"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -10, opacity: 0 }}
                    whileTap={buttonTap}
                    // transition={fadeTransition}
                    className="w-[48px] h-[48px] flex items-center justify-center bg-gray-100 rounded-full"
                    onClick={toggleExpand}
                  >
                    <ChevronLeft />
                  </motion.button>
                ) : (
                  <motion.div
                    layout
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2 overflow-hidden"
                  >
                    <img
                      className="rounded-full border object-cover"
                      style={{ width: "48px", height: "48px" }}
                      src="https://framerusercontent.com/images/jowDUfnbCLGOBu7PEdfAyzD3o.png"
                      alt=""
                    />
                    <motion.div
                      layout
                      className="h-[48px] flex flex-col justify-center"
                    >
                      <p className="text-xl font-medium leading-tight">
                        Abhishek KC
                      </p>
                      <h1 className="text-gray-500 leading-tight">
                        Software Designer
                      </h1>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence mode="wait" initial={false}>
                {state.expand && (
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.1 }}
                    className="middle-icon flex gap-2 overflow-hidden justify-between items-center absolute inset-x-0 mx-auto w-[172px]"
                  >
                    <div className="p-0.5">
                      <motion.button
                        // transition={mainTransition}
                        className="h-[48px] w-[48px] flex items-center justify-center bg-gray-100 rounded-full"
                        onClick={goToWork}
                        whileTap={buttonTap}
                      >
                        <BriefcaseBusiness />
                      </motion.button>
                    </div>
                    <div className="p-0.5">
                      <motion.button
                        // transition={mainTransition}
                        className="w-[48px] h-[48px] flex items-center justify-center bg-gray-100 rounded-full"
                        whileTap={buttonTap}
                      >
                        <Github />
                      </motion.button>
                    </div>

                    <div className="p-0.5">
                      <motion.button
                        // transition={mainTransition}
                        className="w-[48px] h-[48px] flex items-center justify-center bg-gray-100 rounded-full"
                        whileTap={buttonTap}
                      >
                        <Mail />
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence mode="wait" initial={false}>
                {state.expand ? (
                  <motion.button
                    layout
                    key="info"
                    initial={{ x: 10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 10, opacity: 0 }}
                    whileTap={buttonTap}
                    transition={{ duration: 0.2 }}
                    className="w-[48px] h-[48px] flex items-center justify-center bg-gray-100 rounded-full"
                    onClick={goToInfo}
                  >
                    <Info />
                  </motion.button>
                ) : (
                  <motion.button
                    layout
                    key="next"
                    initial={{ x: 10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 10, opacity: 0 }}
                    whileTap={buttonTap}
                    transition={{ duration: 0.2 }}
                    className="w-[48px] h-[48px] flex items-center justify-center bg-gray-100 rounded-full"
                    onClick={toggleExpand}
                  >
                    <ChevronRight />
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default MiniPortfolio;
