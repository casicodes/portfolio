import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  Plus,
  SendHorizontal,
  FolderClosed,
  Image,
  Headphones,
} from "lucide-react";
function Chatgpt() {
  const [media, setMedia] = useState(true);
  const wrapperVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
    },
  };
  const btnVariants = {
    hidden: { x: -20, opacity: 0, scale: 0.6 },
    visible: { x: 0, opacity: 1, scale: 1 },
    exit: { x: 20, opacity: 0, scale: 0.6 },
  };
  return (
    <div className="playground flex flex-col gap-6">
      <div className="playground-desc">
        <h1 className="text-gray-800 font-medium text-lg">
          Chatgpt interaction
        </h1>
        <p className="font-light text-gray-500">
          Recreating this micro-interaction I noticed on the Chatgpt mobile app.
        </p>
      </div>
      <div className="playground-area rounded-2xl min-h-80 bg-white border-dashed border border-gray-300 gap-4 flex flex-col items-center justify-center">
        <div className="flex items-center gap-4 justify-between w-[320px]">
          <div>
            {" "}
            <AnimatePresence initial={false}>
              {media ? (
                <motion.button
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                  transition={{ duration: 0.4, type: "spring", delay: 0.1 }}
                  className="bg-gray-200 text-gray-600 h-[44px] w-[44px] rounded-full flex items-center justify-center"
                  onClick={() => setMedia(false)}
                >
                  <Plus strokeWidth={3} size={20} />
                </motion.button>
              ) : (
                <motion.div
                  variants={wrapperVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex gap-4"
                >
                  <motion.button
                    variants={btnVariants}
                    className="h-[44px] w-[20px] flex items-center justify-center"
                  >
                    <Headphones strokeWidth={2} size={20} />
                  </motion.button>
                  <motion.button
                    variants={btnVariants}
                    className="h-[44px] w-[20px] flex items-center justify-center"
                  >
                    <Image strokeWidth={2} size={20} />
                  </motion.button>
                  <motion.button
                    variants={btnVariants}
                    className="h-[44px] w-[20px] flex items-center justify-center"
                  >
                    <FolderClosed strokeWidth={2} size={20} />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="relative grow">
            <motion.div
              layout
              transition={{
                layout: {
                  type: "spring",
                  bounce: 0,
                  duration: 1,
                  stiffness: 500,
                  damping: 30,
                },
              }}
              className="flex items-center grow"
            >
              <input
                onFocus={() => setMedia(true)}
                type="text"
                placeholder="Send a message..."
                className="w-full border-2 rounded-full px-3 pl-4 py-2 focus:outline-none truncate"
              />
            </motion.div>

            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white">
              <SendHorizontal size={20} className="text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatgpt;
