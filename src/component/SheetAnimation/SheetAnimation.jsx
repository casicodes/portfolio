import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function SheetAnimation() {
  const [isActive, setActive] = useState(false);
  return (
    <div className="playground flex flex-col gap-6">
      <div className="playground-desc">
        <h1 className="text-gray-800 font-medium text-lg">
          Confirmation interaction
        </h1>
        <p className="font-light text-gray-500">
          Click on the delete to see the interaction. Inspired by{" "}
          <a className="underline" target="_blank" href="https://x.com/family">
            family
          </a>
          .
        </p>
      </div>
      <div className="playground-area rounded-2xl min-h-80 bg-white border-dashed border border-gray-300 gap-4 flex flex-col items-center justify-center">
        <div className="w-[320px] h-[140px] flex flex-col justify-end space-between">
          <AnimatePresence mode="wait">
            <motion.div layout key={isActive ? "active" : "inactive"}>
              {isActive ? (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="flex flex-col gap-5"
                >
                  <div>
                    <h3 className="text-lg font-medium mb-1">Are you sure?</h3>
                    <p className="text-gray-500 leading-5">
                      Deleting your account will permanently erase all your data
                      and settings.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <motion.button
                      className="text-black bg-gray-100 rounded-full w-full py-3 leading-6 shadow-sm hover:bg-gray-200"
                      onClick={() => setActive(false)}
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      layoutId="continue"
                      className="text-white bg-red-600 rounded-full py-3 w-full leading-6 shadow-sm hover:bg-red-700 active:bg-red-600 focus:bg-red-600"
                      onClick={() => setActive(false)}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        // type: "easeOut",
                        // duration: 0.14,
                        // bounce: 0,
                        type: "spring",
                        bounce: 0.1,
                        duration: 0.3,
                      }}
                    >
                      Delete
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <motion.button
                  layoutId="continue"
                  className="text-white bg-red-600 rounded-full py-3 w-full leading-6 shadow-sm hover:bg-red-700"
                  onClick={() => setActive(true)}
                  initial={{ opacity: 1 }}
                  transition={{
                    // type: "easeOut",
                    // duration: 0.18,
                    // bounce: 0,
                    type: "spring",
                    bounce: 0.1,
                    duration: 0.3,
                  }}
                >
                  Delete
                </motion.button>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default SheetAnimation;
