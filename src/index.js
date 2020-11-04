
import Phaser from "phaser";
import MainScene from "./scenes/Main";
import GameScene from "./scenes/Game";

const config = {
  type: Phaser.AUTO,
  scaleMode: Phaser.SHOW_ALL,
  pageAlignHorizontally: true,
  pageAlignVertically: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 }
    }
  },
  scene: [MainScene, GameScene]
};

const game = new Phaser.Game(config);
