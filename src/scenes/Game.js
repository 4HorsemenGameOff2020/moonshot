import { Scene } from "phaser";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "game" });
    this.score = 0;
    this.gameOver = false;
  };

  preload() {
  };

  create() {
    const { width, height } = this.scale;
    this.add.sprite(width * 0.5, height * 0.5, "assassin")
  };

  update() {

  }
};