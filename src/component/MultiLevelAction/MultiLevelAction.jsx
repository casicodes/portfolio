import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Utensils, Clock, CreditCard, Trash2 } from "lucide-react";
const ctas = [
  {
    label: "View Order History",
    icon: <Clock size={20} />,
    step: "orderHistory",
  },
  {
    label: "Manage Payment Methods",
    icon: <CreditCard size={20} />,
    step: "paymentMethods",
  },
  {
    label: "Delete Account",
    icon: <Trash2 size={20} />,
    step: "deleteAccount",
  },
];

const buttonVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.3,
      bounce: 0,
    },
  },
};

const OrderHistoryStep = ({ onBack }) => (
  <motion.div
    layoutId="container"
    transition={{ type: "spring", duration: 0.3, bounce: 0 }}
    className="flex flex-col gap-4 bg-white p-4 rounded-xl w-[320px] shadow-sm border"
  >
    <Clock size={28} />
    <div>
      <p className="text-lg font-medium mb-1">Order History</p>
      <p className="text-gray-500 leading-5">
        View your past orders and reorder your favorites with ease.
      </p>
    </div>
    <hr />
    <ul>
      <li className="text-gray-500 flex items-center gap-2 text-sm mb-2">
        <Utensils size={16} /> See detailed order information
      </li>
      <li className="text-gray-500 flex items-center gap-2 text-sm mb-2">
        <Clock size={16} /> Track delivery times
      </li>
      <li className="text-gray-500 flex items-center gap-2 text-sm mb-2">
        <CreditCard size={16} /> Review past expenses
      </li>
    </ul>
    <div className="flex gap-3">
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="py-3 rounded-xl bg-gray-100 hover:bg-gray-200 grow"
        onClick={onBack}
      >
        Back
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white grow"
      >
        View Orders
      </motion.button>
    </div>
  </motion.div>
);

const PaymentMethodsStep = ({ onBack }) => (
  <motion.div
    layoutId="container"
    transition={{ type: "spring", duration: 0.3, bounce: 0 }}
    className="flex flex-col gap-4 bg-white p-4 rounded-xl w-[320px] shadow-sm border"
  >
    <CreditCard size={28} />
    <div>
      <p className="text-lg font-medium mb-1">Payment Methods</p>
      <p className="text-gray-500 leading-5">
        Manage your payment options for quick and easy checkout.
      </p>
    </div>
    <hr />
    <ul>
      <li className="text-gray-500 flex items-center gap-2 text-sm mb-2">
        <CreditCard size={16} /> Add or remove credit cards
      </li>
      <li className="text-gray-500 flex items-center gap-2 text-sm mb-2">
        <Utensils size={16} /> Set default payment method
      </li>
      <li className="text-gray-500 flex items-center gap-2 text-sm mb-2">
        <Clock size={16} /> Update billing information
      </li>
    </ul>
    <div className="flex gap-3">
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="py-3 rounded-xl bg-gray-100 hover:bg-gray-200 grow"
        onClick={onBack}
      >
        Back
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white grow"
      >
        Manage
      </motion.button>
    </div>
  </motion.div>
);

const DeleteAccountStep = ({ onBack }) => (
  <motion.div
    layoutId="container"
    transition={{ type: "spring", duration: 0.3, bounce: 0 }}
    className="flex flex-col gap-4 bg-white p-4 rounded-xl w-[320px] shadow-sm border"
  >
    <Trash2 size={28} />
    <div>
      <p className="text-lg font-medium mb-1">Delete Account</p>
      <p className="text-gray-500 leading-5">
        We're sorry to see you go. Are you sure you want to delete your account?
      </p>
    </div>
    <hr />
    <ul>
      <li className="text-gray-500 flex items-center gap-2 text-sm mb-2">
        <Trash2 size={16} /> All your data will be deleted
      </li>
      <li className="text-gray-500 flex items-center gap-2 text-sm mb-2">
        <Clock size={16} /> Order history will be lost
      </li>
      <li className="text-gray-500 flex items-center gap-2 text-sm mb-2">
        <CreditCard size={16} /> Card details will be removed
      </li>
    </ul>
    <div className="flex gap-3">
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="py-3 rounded-xl bg-gray-100 hover:bg-gray-200 grow"
        onClick={onBack}
      >
        Cancel
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white grow"
      >
        Delete Account
      </motion.button>
    </div>
  </motion.div>
);
function MultiLevelAction() {
  const [currentStep, setCurrentStep] = useState(null);

  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  const handleBack = () => {
    setCurrentStep(null);
  };
  return (
    <div className="playground flex flex-col gap-8">
      <div className="playground-desc flex flex-col gap-1">
        <h1 className="text-gray-800">Tray system</h1>
        <p className="text-gray-500">
          I came across an interaction in an{" "}
          <a href="https://benji.org/family-values" className="underline">
            article
          </a>{" "}
          by Benji Taylor, and loved it so much that I decided to recreate it.
        </p>
      </div>
      <div className="playground-area rounded-2xl h-[491px] bg-white border-dashed border border-gray-300 gap-4 flex flex-col items-center justify-end">
        <AnimatePresence>
          <div className="flex items-center justify-center">
            <div className="flex items-end ">
              {currentStep === null ? (
                <motion.div
                  layoutId="container"
                  transition={{ type: "spring", duration: 0.3, bounce: 0 }}
                  className="flex flex-col gap-3 bg-white p-4 rounded-xl w-[320px] shadow-sm border"
                >
                  <p className="text-lg font-medium relative">
                    Account Settings
                  </p>

                  <motion.div className="flex flex-col gap-3">
                    {ctas.map((el, i) => (
                      <motion.button
                        key={i}
                        variants={buttonVariants}
                        layout
                        whileTap={{ scale: 0.95 }}
                        className={`${
                          i === 2
                            ? "bg-red-50 text-red-500 hover:bg-red-100"
                            : "bg-gray-100"
                        } flex items-center gap-2  hover:bg-gray-200 py-3 px-3 rounded-xl`}
                        onClick={() => handleStepChange(el.step)}
                      >
                        {el.icon} {el.label}
                      </motion.button>
                    ))}
                  </motion.div>
                </motion.div>
              ) : currentStep === "orderHistory" ? (
                <OrderHistoryStep onBack={handleBack} />
              ) : currentStep === "paymentMethods" ? (
                <PaymentMethodsStep onBack={handleBack} />
              ) : (
                <DeleteAccountStep onBack={handleBack} />
              )}
            </div>
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default MultiLevelAction;
