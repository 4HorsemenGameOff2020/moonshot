import { GameObjects } from 'phaser';
import Align from "./Align";

export default class Space extends GameObjects.Container {
  constructor(config) {
    super(config.scene);
    this.scene = config.scene;
    this.background = this.scene.add.image(0, 0, "space");
    this.add(this.background);
    this.scene.add.existing(this);
    Align.scaleToGameW(this.background, 1)
    this.setSize(game.config.width, game.config.height);
  }
};