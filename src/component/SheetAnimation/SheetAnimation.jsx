import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function SheetAnimation() {
  const [isActive, setActive] = useState(false);
  return (
    <div className="playground flex flex-col gap-6">
      <div className="playground-desc">
        <h1 className="text-lg">Section title</h1>
        <p className="font-light text-gray-500">Section description</p>
      </div>
      <div className="playground-area rounded-2xl min-h-80 bg-white border-dashed border border-gray-300 gap-4 flex flex-col items-center justify-center">
        <div className="w-[320px]">
          <AnimatePresence>
            <motion.div layout className="flex gap-2">
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "100%" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <button className="text-black bg-gray-100 rounded-full w-full py-3 leading-6 shadow-sm hover:bg-gray-200">
                    Cancel
                  </button>
                </motion.div>
              )}

              <motion.div
                className="w-full"

                // style={{
                //   width: "100%",
                // }}
              >
                <motion.button
                  // transition={{ duration: 4 }}
                  // layoutId="continue-button"
                  className="text-white bg-green-600 rounded-full py-3 w-full leading-6 shadow-sm hover:bg-green-700"
                  onClick={() => setActive((is) => !is)}
                  // style={{
                  //   width: "100%",
                  // }}
                >
                  Continue
                </motion.button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default SheetAnimation;
