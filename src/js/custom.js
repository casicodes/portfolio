let activeTab = "Payments";
const tabList = document.getElementById("tabList");
const overlayList = document.getElementById("overlayList");
const clipPathContainer = document.getElementById("clipPathContainer");

function createOverlayButton(button) {
  const li = document.createElement("li");
  const overlayButton = button.cloneNode(true);
  overlayButton.className =
    "button py-3 px-4 flex items-center gap-1 leading-1 button-overlay";
  overlayButton.tabIndex = -1;
  li.appendChild(overlayButton);
  return li;
}

function setActiveTab(tabName) {
  activeTab = tabName;
  updateClipPath();
}

function updateClipPath() {
  const activeTabElement = tabList.querySelector(`[data-tab="${activeTab}"]`);
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
}

// Create overlay buttons
tabList.querySelectorAll(".button").forEach((button) => {
  overlayList.appendChild(createOverlayButton(button));
  button.addEventListener("click", () => setActiveTab(button.dataset.tab));
});

updateClipPath();
window.addEventListener("resize", updateClipPath);
