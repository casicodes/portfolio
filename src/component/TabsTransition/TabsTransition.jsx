import { useState, useEffect, useRef } from "react";
import "../TabsTransition/TabsTransition.css";

const TabsTransition = () => {
  const [activeTab, setActiveTab] = useState("Card");
  const tabListRef = useRef(null);
  const clipPathContainerRef = useRef(null);

  useEffect(() => {
    const updateClipPath = () => {
      const tabList = tabListRef.current;
      const clipPathContainer = clipPathContainerRef.current;
      const activeTabElement = tabList.querySelector(
        `[data-tab="${activeTab}"]`
      );
      if (activeTabElement) {
        const { offsetLeft, offsetWidth } = activeTabElement;
        const containerWidth = clipPathContainer.offsetWidth;
        const clipLeft = offsetLeft;
        const clipRight = offsetLeft + offsetWidth;
        clipPathContainer.style.clipPath = `inset(0px ${Number(
          100 - (clipRight / containerWidth) * 100
        ).toFixed()}% 0px ${Number(
          (clipLeft / containerWidth) * 100
        ).toFixed()}% round 100px)`;
      }
    };

    updateClipPath();
    window.addEventListener("resize", updateClipPath);
    return () => window.removeEventListener("resize", updateClipPath);
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const tabs = [
    {
      name: "Card",
      icon: "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z",
    },
    {
      name: "Wallet",
      icon: "M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3",
    },
    {
      name: "Reward",
      icon: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z",
    },
  ];

  return (
    <div className="playground flex flex-col gap-6">
      <div className="playground-desc">
        <h1 className="text-lg">Tabs transition</h1>
        <p className="font-light text-gray-500">
          Click on the tabs to see the interaction. Inspired by {""}
          <a href="https://x.com/stripe" target="_blank" className="underline">
            stripe
          </a>
          .
        </p>
      </div>
      <div className="playground-area rounded-2xl min-h-60 bg-white border-dashed border border-gray-300 flex items-center justify-center">
        <div className="wrapper relative flex flex-col items-center w-fit">
          <ul className="list" ref={tabListRef}>
            {tabs.map((tab) => (
              <li key={tab.name}>
                <button
                  className={`button py-3 px-4 flex items-center gap-1 leading-1 ${
                    activeTab === tab.name ? "active" : ""
                  }`}
                  data-tab={tab.name}
                  onClick={() => handleTabClick(tab.name)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={tab.icon}
                    ></path>
                  </svg>
                  {tab.name}
                </button>
              </li>
            ))}
          </ul>
          <div
            aria-hidden="true"
            className="clip-path-container"
            ref={clipPathContainerRef}
          >
            <ul className="list list-overlay bg-green-600">
              {tabs.map((tab) => (
                <li key={tab.name}>
                  <button
                    className="button py-3 px-4 flex items-center gap-1 leading-1 button-overlay"
                    data-tab={tab.name}
                    tabIndex="-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={tab.icon}
                      ></path>
                    </svg>
                    {tab.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsTransition;
