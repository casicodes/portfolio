import { ArrowLeft, ArrowRight, Plus, Ellipsis } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
function NewTab() {
  const [counter, setCounter] = useState(17);
  const [key, setKey] = useState(0);

  function handleClick() {
    setCounter((num) => num + 1);
    setKey((prevKey) => prevKey + 1);
  }
  return (
    <div className="playground flex flex-col gap-6">
      <div className="playground-desc">
        <h1 className="text-lg">New tab interaction</h1>
        <p className="font-light text-gray-500">
          Inspired by{" "}
          <a
            href="https://www.designspells.com/spells/the-tab-counter-turns-into-a-smiley-after-exceeding-99-tabs-in-chrome"
            className="underline"
          >
            chrome's{" "}
          </a>{" "}
          new tab interaction on clicking plus button.
        </p>
      </div>
      <div className="playground-area rounded-2xl min-h-80 bg-white border-dashed border border-gray-300 gap-4 flex flex-col items-center justify-center">
        <div className="flex justify-between w-[300px] items-center">
          <button className="text-gray-400 w-8 h-8 flex items-center justify-center">
            <ArrowLeft />
          </button>
          <button className="text-gray-400 w-8 h-8 flex items-center justify-center">
            <ArrowRight />
          </button>
          <motion.button
            className="text-gray-400 bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200"
            onClick={handleClick}
            animation
            whileTap={{ scale: 0.9 }}
          >
            <Plus strokeWidth={2.5} />
          </motion.button>

          <div className="w-[28px] h-[28px] flex items-center justify-center text-sm">
            <motion.span
              className="border-2 border-gray-400 rounded-md w-[26px] h-[26px] flex items-center justify-center text-gray-400 font-semibold text-sm"
              key={key}
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ type: "ease-out", duration: 0.3, delay: 0.02 }}
            >
              {counter}
            </motion.span>
          </div>
          <button className="text-gray-400 w-8 h-8 flex items-center justify-center">
            <Ellipsis size={48} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default NewTab;
