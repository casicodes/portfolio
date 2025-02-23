import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const ModalUI = () => {
  const [status, setStatus] = useState("initial");
  // initial, learning, updating, done

  const handleLearnClick = () => {
    setStatus("Learning from your update");

    setTimeout(() => {
      setStatus("Updating your preferences");

      setTimeout(() => {
        setStatus("All set!");

        setTimeout(() => {
          setStatus("initial");
        }, 3000);
      }, 4000);
    }, 4000);
  };

  const getStatusText = () => {
    switch (status) {
      case "Learning from your update":
      case "Updating your preferences":
        return (
          <motion.p
            key={status}
            initial={{ y: 8, x: 0 }}
            animate={{ y: 0, x: 0 }}
            transition={{
              duration: 1,
              type: "spring",
            }}
            className="text-gray-600 text-base font-medium shimmer"
          >
            {status}
          </motion.p>
        );
      case "All set!":
        return (
          <motion.button
            key={status}
            initial={{ y: 8, x: 0 }}
            animate={{ y: 0, x: 0 }}
            transition={{
              duration: 0.7,
              type: "spring",
            }}
            class="text-white items-center justify-center text-sm bg-green-600 px-4 py-2 flex rounded-md hover:bg-green-700 border border-green-600 w-full"
          >
            All set
          </motion.button>
        );
      default:
        return "";
    }
  };

  return (
    <div className="playground flex flex-col gap-8">
      <div className="playground-desc flex flex-col gap-1">
        <h1 className="text-gray-800 md:text-lg capitalize font-medium">
          Modal UI
        </h1>
        <p className="text-gray-500">Rethinking confirmation flow</p>
      </div>
      <div className="playground-area rounded-2xl bg-white border border-gray-100 gap-4 flex flex-col items-center justify-start">
        <div className="border-stone-200 border w-[320px] md:w-[400px] bg-gray-100 rounded-xl flex flex-col justify-between">
          <div className="flex items-start flex-col gap-4">
            <div className="flex flex-col w-full">
              <div className="flex flex-row px-[16px] py-[12px] rounded-t-xl justify-between items-center bg-gray-100">
                <p className="m-0 font-medium text-base p-0">
                  Do you want us to learn these changes?
                </p>
                <X size={20} strokeWidth={1.5} />
              </div>
              <div className="flex flex-row px-[16px] py-[16px] bg-white rounded-t-lg shadow-[0_0_4px_rgba(0,0,0,0.15)]">
                <ul className="list-disc list-inside text-[13px] text-gray-600 w-full">
                  <li className="text-sm flex items-center gap-1 mb-2 last:mb-0">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 "
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    Highlight critical financial updates.
                  </li>
                  <li className="text-sm flex items-center gap-1 mb-2 last:mb-0">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 "
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    Use currency symbols for better clarity.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-row min-h-[63px] gap-2 border-t px-[16px] py-[12px] bg-white rounded-b-xl items-center justify-between">
            <AnimatePresence mode="wait">
              {status === "initial" ? (
                <>
                  <button className="text-sm h-[38px] px-4 py-2 shadow-sm hover:shadow-md border transition-shadow border-stone-200 rounded-md flex">
                    Ignore
                  </button>
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={handleLearnClick}
                    className="text-white h-[38px] text-sm bg-green-600 px-4 py-2 flex rounded-md hover:bg-green-700  focus:bg-green-800 focus:outline-green-800 items-center"
                  >
                    Help AI learn
                  </motion.button>
                </>
              ) : (
                <>{getStatusText()}</>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalUI;
