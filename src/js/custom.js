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

tabList.querySelectorAll(".button").forEach((button) => {
  overlayList.appendChild(createOverlayButton(button));
  button.addEventListener("click", () => setActiveTab(button.dataset.tab));
});

updateClipPath();
window.addEventListener("resize", updateClipPath);

const movieCards = document.querySelectorAll(".movie-wrapper .movie-card");

// Array of background image URLs
const backgroundImages = [
  'url("images/nike1.png")',
  'url("images/nike2.jpeg")',
  'url("images/nike3.jpeg")',
];

// Loop through the movie cards and set different background images
movieCards.forEach((card, index) => {
  if (index < backgroundImages.length) {
    card.style.backgroundImage = backgroundImages[index];
  }
});
