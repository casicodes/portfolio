const clickSound = new Audio("/click.mp3");

export const playClickSound = () => {
  clickSound.currentTime = 0;
  clickSound.play();
};
