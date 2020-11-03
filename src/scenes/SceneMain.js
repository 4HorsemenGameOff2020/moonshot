import logoImg from "../assets/player.png";

export class SceneMain extends Phaser.Scene {
  constructor() {
    super({ key: "SceneMain" });
    this.state = {}
  }

  preload() {
    this.load.image("SceneMain", logoImg);
  }

  create() {
    this.state.image = this.add.image(400, 150, "SceneMain");
    this.input.keyboard.on('keyup_D', function (event) {
      this.state.image.x += 10;
    }, this);
    this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
  };

  update(delta) {
    if (this.key_A.isDown) {
      this.state.image.x--;
    }
  }
};

