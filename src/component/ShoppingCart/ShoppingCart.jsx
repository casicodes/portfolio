import React, { useState, useRef, useEffect } from "react";
import nike1 from "../../assets/nike1.png";
import nike2 from "../../assets/nike2.jpeg";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, X } from "lucide-react";

const products = [
  { image: nike1, name: "G.T. Hustle 3", price: "$280" },
  { image: nike2, name: "Alphafly 3", price: "$390" },
];

const Playground = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const toggleCart = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="playground flex flex-col gap-6">
      <div className="playground-desc">
        <h1 className="text-lg">Shopping cart</h1>
        <p className="font-light text-gray-500">
          Simple cart pop up animation built using framer motion.
        </p>
      </div>
      <div className="playground-area rounded-2xl min-h-80 bg-white border-dashed border border-gray-300 gap-4 flex flex-col items-center justify-center">
        <div ref={containerRef} style={{ position: "relative" }}>
          <motion.button
            className="border bg-white shadow-sm mx-auto z-10 relative flex w-12 h-12 rounded-full justify-center items-center"
            onClick={toggleCart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div layout>
              {isOpen ? <X size={20} /> : <ShoppingCart size={20} />}
            </motion.div>
          </motion.button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="border space-y-3 absolute bg-white rounded-lg p-4 shadow-md shadow-gray-500/20"
                initial={{ scale: 0.7, opacity: 0, y: 10, x: "-50%" }}
                animate={{ scale: 1, opacity: 1, y: -5, x: "-50%" }}
                exit={{ scale: 0.7, opacity: 0, y: 10 }}
                transition={{
                  type: "spring",
                  duration: 0.01,
                  stiffness: 360,
                  damping: 20,
                }}
                style={{
                  bottom: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  marginBottom: "10px",
                  width: "280px",
                  zIndex: 10,
                }}
              >
                <h3 className="font-mono mb-4 text-gray-500 text-sm">CART</h3>
                <ul className="space-y-3">
                  {products.map((product) => (
                    <li
                      className="flex flex-row gap-2 items-center"
                      key={product.name}
                    >
                      <img
                        src={`${product.image}`}
                        className="w-8 rounded"
                        alt=""
                      />{" "}
                      <span className="flex-grow">{product.name}</span>
                      <span>{product.price}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4">
                  <button className="w-full text-white bg-green-600 rounded-full px-3 py-3 leading-6 shadow-sm  hover:bg-green-700">
                    Continue to checkout
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Playground;
