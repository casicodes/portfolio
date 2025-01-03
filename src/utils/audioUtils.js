const clickSound = new Audio("/src/assets/click.mp3");

export const playClickSound = () => {
  clickSound.currentTime = 0;
  clickSound.play();
};
