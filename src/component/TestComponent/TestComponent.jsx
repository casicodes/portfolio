import { motion } from "framer-motion";
import "../TestComponent/TestComponent.css";
function TestComponent() {
  return (
    <motion.div
      className="box"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
    />
  );
}
export default TestComponent;
