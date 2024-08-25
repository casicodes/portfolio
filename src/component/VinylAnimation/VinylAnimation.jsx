import { motion } from "framer-motion";
import { useState } from "react";
import albumCover from "../../assets/album-cover.png";
import vinylImage from "../../assets/vinyl-shadow.png";

const VinylAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="playground flex flex-col gap-6">
      <div className="playground-desc">
        <h1 className="text-lg">Vinyl reveal</h1>
        <p className="font-light text-slate-500">
          Hover on the album cover to see the interaction. Images used from
          google.
        </p>
      </div>
      <div className="playground-area rounded-2xl min-h-60 bg-white border-dashed border border-gray-300 gap-4 flex flex-col items-center justify-start">
        <div
          className="relative w-[300px] h-[300px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-full flex flex-col justify-between overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{
              type: "spring",
              duration: 0.2,
              stiffness: 300,
              damping: 30,
            }}
          >
            <motion.div
              className="flex flex-col justify-center items-center"
              initial={{ y: 30 }}
              animate={{ y: isHovered ? 0 : 30 }}
              transition={{
                type: "spring",
                duration: 0.2,
                stiffness: 300,
                damping: 30,
              }}
            >
              <motion.img
                src={vinylImage}
                alt="Vinyl"
                className="w-44 h-44 mx-auto"
                initial={{ y: 5, scale: 0.8 }}
                animate={{ y: isHovered ? -5 : 0, scale: 1.3 }}
                transition={{
                  type: "spring",
                  duration: 0.2,
                  stiffness: 300,
                  damping: 30,
                }}
              />
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ y: -15 }}
              animate={{ y: isHovered ? 0 : -15 }}
              transition={{
                type: "spring",
                duration: 0.2,
                stiffness: 300,
                damping: 30,
              }}
            >
              <h2 className="text-lg font-medium">Sketches of Spain</h2>
              <p className="font-mono text-gray-500 text-sm mb-4">
                By Miles Davis
              </p>

              <button className="text-white bg-green-600 rounded-full px-4 py-3 leading-6 shadow-sm hover:bg-green-700">
                Buy Now
              </button>
            </motion.div>
          </motion.div>
          <motion.img
            src={albumCover}
            alt="Album Cover"
            className="rounded-xl"
            style={{
              width: "250px",
              height: "250px",
              objectFit: "cover",
              margin: "20px auto 0 auto",
            }}
            animate={{
              x: isHovered ? -225 : 0,
              rotate: isHovered ? -10 : 0,
              opacity: isHovered ? 0.5 : 1,
              filter: isHovered
                ? "grayscale(100%) blur(2px)"
                : "grayscale(0%) blur(0px)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
          />
        </div>
      </div>
    </div>
  );
};

export default VinylAnimation;
