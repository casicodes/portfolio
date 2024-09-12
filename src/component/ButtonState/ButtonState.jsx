import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  PawPrint,
  UtensilsCrossed,
  Thermometer,
  Loader2,
  Check,
} from "lucide-react";
import house from "../../assets/house.jpg";

function ButtonState() {
  const [active, setActive] = useState(false);
  const [buttonState, setButtonState] = useState("idle");

  const Ameneties = [
    { name: "Pet Friendly", icon: <PawPrint strokeWidth={1.5} /> },
    { name: "Kitchen", icon: <UtensilsCrossed strokeWidth={1.5} /> },
    { name: "Heating", icon: <Thermometer strokeWidth={1.5} /> },
    // { name: "Hot water", icon: <Bath strokeWidth={1.5} /> },
  ];

  function handleClick() {
    setButtonState("loading");

    setTimeout(() => {
      setButtonState("success");
      setTimeout(() => {
        setButtonState("idle");
      }, 2000);
    }, 3000);
  }

  return (
    <div className="playground flex flex-col gap-6">
      <div className="playground-desc">
        <h1 className="text-lg">Button state interaction</h1>
        <p className="font-light text-gray-500">
          Interactive button that transitions through different states. View
          details {">"} Book now
        </p>
      </div>
      <div className="playground-area rounded-2xl min-h-80 bg-white border-dashed border border-gray-300 gap-4 flex flex-col items-center justify-center">
        <AnimatePresence>
          <motion.div className="w-[320px] rounded-xl relative">
            <img src={house} alt="" className="rounded-xl" />
            {active ? (
              <motion.div
                layoutId="container"
                transition={{
                  layout: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.3,
                  },
                }}
                className="flex justify-between flex-col absolute bottom-0 right-0 left-0 top-0 p-3 backdrop-blur-lg bg-white/70 rounded-xl"
              >
                <motion.div className="flex justify-between items-center pb-5">
                  <div>
                    <motion.h3 className="font-bold" layoutId="title">
                      Foxground, Australia
                    </motion.h3>
                    <p>Aud 1500 per night</p>
                  </div>

                  <button
                    className="bg-white rounded-full px-2 py-2 shadow-sm hover:bg-slate-50"
                    onClick={() => {
                      setActive((prevState) => !prevState);
                      setButtonState("idle");
                    }}
                  >
                    <X size={20} />
                  </button>
                </motion.div>
                <motion.div className="flex flex-col grow">
                  <p className="pb-5">
                    Rainforest tiny house is in one of the most beautiful
                    locations the region has to offer.
                  </p>
                  <h5 className="pb-3 text-xs tracking-wider uppercase text-gray-500">
                    What this place offers
                  </h5>
                  <ul>
                    {Ameneties.map((item) => (
                      <li key={item} className="flex gap-2 mb-2">
                        {item.icon} {item.name}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div>
                  <motion.button
                    className={`
                      ${
                        buttonState === "idle"
                          ? "bg-neutral-800"
                          : buttonState === "loading"
                          ? "bg-sky-600 text-sky-50"
                          : buttonState === "success"
                          ? "bg-emerald-600 text-emerald-50"
                          : "bg-neutral-800"
                      }
                     font-semibold flex gap-1 items-center justify-center rounded-full px-3 h-[48px] leading-4 shadow-sm w-full
                      ${
                        buttonState === "loading"
                          ? "text-neutral-800"
                          : "text-white"
                      }
                    `}
                    onClick={handleClick}
                  >
                    {buttonState === "idle" && "Book Now"}
                    {buttonState === "loading" && (
                      <motion.span className="relative flex gap-1 items-center">
                        <motion.span
                          initial={{
                            x: 15,
                          }}
                          animate={{
                            x: 0,
                          }}
                        >
                          <Loader2 size={20} className="animate-spin" />
                        </motion.span>
                        <motion.span
                          initial={{
                            x: -15,
                          }}
                          animate={{
                            x: 0,
                          }}
                          transition={{
                            type: "spring",
                            duration: 0.3,
                            stiffness: 300,
                            damping: 15,
                          }}
                        >
                          Verifying
                        </motion.span>
                      </motion.span>
                    )}
                    {buttonState === "success" && (
                      <motion.span className="flex gap-1 items-center">
                        <motion.span
                          initial={{
                            x: -15,
                          }}
                          animate={{
                            x: 0,
                          }}
                        >
                          <Check className="inline" size={20} />
                        </motion.span>
                        <motion.span
                          initial={{
                            x: 15,
                          }}
                          animate={{
                            x: 0,
                          }}
                          transition={{
                            type: "spring",
                            duration: 0.3,
                            stiffness: 300,
                            damping: 15,
                          }}
                        >
                          Booking Confirmed
                        </motion.span>
                      </motion.span>
                    )}
                  </motion.button>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                layoutId="container"
                transition={{
                  layout: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.3,
                  },
                }}
                className="flex justify-between items-center absolute bottom-2 right-2 left-2 top-auto px-3 py-2 backdrop-blur-lg bg-white/60 rounded-md"
              >
                <motion.h3 layoutId="title" className="font-bold">
                  Foxground, Australia
                </motion.h3>
                <motion.button
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    type: "spring",
                    bounce: 0,
                    duration: 0.4,
                    delay: 0.05,
                  }}
                  className="text-white bg-neutral-900 text-sm rounded-full px-3 py-2 leading-6 shadow-sm hover:bg-neutral-800"
                  onClick={() => setActive((prevState) => !prevState)}
                >
                  View details
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ButtonState;
