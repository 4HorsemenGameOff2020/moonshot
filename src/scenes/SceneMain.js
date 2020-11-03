import logoImg from "../assets/logo.png";

export class SceneMain extends Phaser.Scene {
  constructor() {
    super({ key: "SceneMain" });
  }
  preload() {
    this.load.image("SceneMain", logoImg);
  }
  create() {
    this.image = this.add.image(400, 150, "SceneMain");
    this.input.keyboard.on('keyup_D', function (event) {
      this.image.x += 10;
    }, this);
  }
};

