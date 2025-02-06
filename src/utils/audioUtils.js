const clickSound = new Audio("/click_sound.mp3");
const isMobileDevice = () => {
  return /Mobi|Android/i.test(navigator.userAgent);
};

export const playClickSound = () => {
  if (!isMobileDevice()) {
    clickSound.currentTime = 0;
    clickSound.play().catch((error) => {
      console.error("Audio playback error:", error);
    });
  }
};
