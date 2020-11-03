
import Phaser from "phaser";
import { SceneMain } from "./scenes/SceneMain";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: [SceneMain]
};

const game = new Phaser.Game(config);
