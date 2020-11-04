import { Scene } from "phaser";
import button from "../assets/start-button.png";
import background from "../assets/main-background.png";
import player from "../assets/soldier/soldier_tilesheet.png";

export default class MainScene extends Scene {
  constructor() {
    super("main");
  }

  preload() {
    this.load.image("background", background);
    this.load.image("button", button);
    this.load.spritesheet("player", player, { frameWidth: 73, frameHeight: 105, spacing: 7 , margin: 3});
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
    button.displayWidth = 100;
    button.scaleY = button.scaleX;
    button.setInteractive().on(Phaser.Input.Events.POINTER_DOWN, () => {
      console.log('clicked');
    });
    this.char = this.add.sprite(100, 400);
    this.anims.create({
      key: "walk",
      frames: [
        { key: "player", frame: 9 },
        { key: "player", frame: 10 },
      ],
      frameRate: 4,
      repeat: -1
    });
    this.char.play("walk");
  };
};

