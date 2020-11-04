import { Scene } from "phaser";
import button from "../assets/start-button.png";
import background from "../assets/main-background.png";

export default class MainScene extends Scene {
  constructor() {
    super("main");
  }

  preload() {
    this.load.image("background", background);
    this.load.image("button", button);
  }

  create() {
    let background = this.add.image(0, 0, "background");
    background.displayHeight = this.sys.game.config.height;
    background.scaleX = background.scaleY;
    background.y = this.sys.game.config.height / 2;
    background.x = this.sys.game.config.width / 2;
    let button = this.add.sprite(0, 0, "button");
    button.y = this.sys.game.config.height / 2;
    button.x = this.sys.game.config.width / 2;
    button.displayHeight = this.sys.game.config.height / 9;
    button.displayWidth = this.sys.game.config.width / 9;
    button.setInteractive().on(Phaser.Input.Events.POINTER_DOWN, () => {
      console.log('clicked');
    })

  };
};

