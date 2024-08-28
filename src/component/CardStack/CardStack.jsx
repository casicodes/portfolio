import { motion } from "framer-motion";
import React, { useState } from "react";
import "../CardStack/CardStack.css";
function CardStack() {
  const activities = [
    { name: "Camping", location: "Lake St Claire", date: "13 Aug" },
    { name: "Hiking", location: "Blue mountains", date: "20 Aug" },
    { name: "Fishing", location: "Parramatta river", date: "22 Aug" },
  ];
  const [isStacked, setIsStacked] = useState(true);
  const toggleStack = () => {
    setIsStacked(!isStacked);
  };

  return (
    <div className="playground flex flex-col gap-6">
      <div className="playground-desc">
        <h1 className="text-lg">Card stack</h1>
        <p className="font-light text-gray-500">
          Attempt to build the interaction that I saw on{" "}
          <a
            className="underline"
            href="https://x.com/nitishkmrk/status/1822884723485708550"
          >
            twitter
          </a>
          .
        </p>
      </div>
      <div className="playground-area rounded-2xl min-h-60 bg-white border-dashed border border-gray-300 gap-4 flex flex-col items-center justify-start">
        <button
          className="w-16 bg-white rounded-full px-3 py-2 leading-6 shadow-sm border hover:bg-gray-100"
          onClick={toggleStack}
        >
          {isStacked ? "Show" : "Hide"}
        </button>
        <div className="min-h-72 wrapper relative flex flex-col gap-3">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: isStacked ? 1 - index * 0.05 : 1,
                zIndex: isStacked ? activities.length - index : 1,
              }}
              animate={{
                opacity: 1,
                scale: isStacked ? 1 - index * 0.05 : 1,
                marginBottom: isStacked ? "-72px" : "0px",
              }}
              transition={{
                type: "spring",
                duration: 0.2,
                stiffness: 300,
                damping: 20,
              }}
              className="flex flex-row border p-3 rounded-lg items-end w-60 justify-between bg-white shadow"
            >
              <div>
                <h5 className="text-lg leading-6">{activity.name}</h5>
                <p className="text-gray-500 font-mono text-sm">
                  {activity.location}
                </p>
              </div>
              <p className="text-gray-500 font-mono text-sm">{activity.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default CardStack;
