import { GameObjects } from 'phaser';

export default class Space extends GameObjects.Container {
  constructor(config) {
    super(config.scene);
    this.scene = config.scene;
    this.back = this.scene.add.image(0, 0, "space");
    this.add(this.back);
    this.scene.add.existing(this);
    this.back.displayHeight = game.config.height;
    this.back.scaleX = this.back.scaleY;
    this.setSize(game.config.width, game.config.height);
  }
};