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
          Interactive button that transitions through different states.
        </p>
      </div>
      <div className="playground-area rounded-2xl min-h-80 bg-white border-dashed border border-gray-300 gap-4 flex flex-col items-center justify-center">
        <AnimatePresence>
          <motion.div className="w-[320px] rounded-xl relative">
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
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ButtonState;
