import logoImg from "../assets/logo.png";

class Spaceman extends Phaser.Scene {
  constructor() {
    super({ key: "Spaceman" });
  }
  preload() {
    this.load.image("Spaceman", logoImg);
  }
  create() {
    const logo = this.add.image(400, 150, "Spaceman");
    this.input.keyboard.on('keyup_D', function (event) {
      this.image.x += 10;
    }, this);
  }

  // this.tweens.add({
  //   targets: logo,
  //   y: 450,
  //   duration: 2000,
  //   ease: "Power2",
  //   yoyo: true,
  //   loop: -1
  // });
};