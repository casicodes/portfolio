import { motion } from "framer-motion";
import { useState } from "react";
function TabsTransition() {
  const tabs = ["List", "Board", "Calendar", "Files"];
  const [selected, setSelected] = useState("List");
  return (
    <div className="playground flex flex-col gap-8">
      <div className="playground-desc flex flex-col gap-1">
        <h1 className="text-gray-800 md:text-lg capitalize font-medium">
          Tabs transition
        </h1>
        <p className="text-gray-500">
          Click on the tabs to see the interaction.
        </p>
      </div>
      <div className="playground-area rounded-2xl min-h-80 bg-white border-dashed border border-gray-200 gap-4 flex flex-col items-center justify-center">
        <motion.ul layout>
          {tabs.map((tab) => (
            <motion.li
              className={`${
                selected === tab ? "bg-white" : ""
              } relative inline px-4 py-3 hover:cursor-pointer`}
              key="id"
              onClick={() => setSelected(tab)}
            >
              {selected === tab ? (
                <motion.span
                  layoutId="highlight"
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",

                    // stiffness: 100,
                    // damping: 20,
                  }}
                  className="absolute top-0 left-0 bottom-0 right-0 bg-green-600 rounded-full"
                ></motion.span>
              ) : null}
              {/* <motion.span className="relative z-50">{tab}</motion.span> */}
              <motion.span
                className="relative z-50"
                animate={{ color: selected === tab ? "#ffffff" : "#000000" }}
                // transition={{
                //   delay: 0.1, // adds a delay before the transition starts
                // }}
              >
                {tab}
              </motion.span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

export default TabsTransition;
