import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  Plus,
  X,
  CircleCheck,
  ClipboardList,
  MessageCircle,
  Users,
  Folder,
  UserPlus,
} from "lucide-react";
function ContextMenu() {
  const [active, setActive] = useState(false);
  const menus = [
    {
      label: "Task",
      icon: <CircleCheck size={20} className="text-gray-400" />,
    },
    {
      label: "Project",
      icon: <ClipboardList size={20} className="text-gray-400" />,
    },
    {
      label: "Message",
      icon: <MessageCircle size={20} className="text-gray-400" />,
    },
    { label: "Team", icon: <Users size={20} className="text-gray-400" /> },
    {
      label: "Portfolio",
      icon: <Folder size={20} className="text-gray-400" />,
    },
    { label: "Invite", icon: <UserPlus size={20} className="text-gray-400" /> },
  ];
  return (
    <div className="playground flex flex-col gap-8">
      <div className="playground-desc flex flex-col gap-1">
        <h1 className="text-gray-800 md:text-lg capitalize font-medium">
          Expandable context menu
        </h1>
        <p className="text-gray-500">
          Attempt to re-create the interaction I saw on{" "}
          <a
            href="https://twitter.com/nitishkmrk/status/1833031583739289953"
            className="underline"
          >
            x
          </a>
          .
        </p>
      </div>
      <div className="playground-area rounded-2xl min-h-[368px] bg-white border border-gray-100 gap-4 flex flex-col items-center justify-center">
        <AnimatePresence>
          {active ? (
            <motion.div
              layoutId="wrapper"
              style={{ borderRadius: 24 }}
              className="w-[300px] bg-white shadow-sm border px-3 py-3"
            >
              <div className="flex items-center justify-between pb-2">
                <motion.span layoutId="title" className="relative">
                  Create
                </motion.span>

                <X
                  size={20}
                  className="cursor-pointer"
                  onClick={() => setActive((prev) => !prev)}
                />
              </div>
              <div className="flex flex-wrap justify-between bg-gray-50 rounded-2xl p-2">
                {menus.map((menu) => (
                  <motion.button
                    whileHover={{ scale: 0.92 }}
                    whileTap={{ scale: 0.92 }}
                    className="w-[80px] h-[80px] flex flex-col gap-1 items-center transiton duration-300 ease-out justify-center hover:bg-white rounded-xl"
                  >
                    {menu.icon} {menu.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.button
              layoutId="wrapper"
              style={{ borderRadius: 24 }}
              className="flex gap-1  bg-white items-center justify-between px-4 py-3 leading-6 shadow-sm border hover:bg-gray-100 active:bg-white focus:bg-white text-center"
              onClick={() => setActive((prev) => !prev)}
            >
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  duration: 0.1,
                  bounce: 0,
                  delay: 0.2,
                }}
              >
                <Plus size={20} />
              </motion.div>
              <motion.span layoutId="title" className="relative">
                Create
              </motion.span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ContextMenu;
