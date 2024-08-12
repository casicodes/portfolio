import { motion } from "framer-motion";
import "../TestComponent/TestComponent.css";
function TestComponent() {
  return (
    <motion.div
      className="box"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      transition={{ duration: 5 }}
    />
  );
}
export default TestComponent;
