import Game from "./scenes/Game.js";
import GameOver from "./scenes/GameOver.js";
import Menu from "./scenes/Menu.js";
import Opciones from "./scenes/Opciones.js";
import Tuto from "./scenes/Tuto.js";
import Cargar from "./scenes/Cargar.js";

// Create a new Phaser config object
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 800,
      height: 600,
    },
    max: {
      width: 1920,
      height: 1080,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 1850 },
      //debug: true,
    },
  },
  render: {
    pixelArt: true,
    antialias: false,
    roundPixels: true,
  },
  // List of scenes to load
  // Only the first scene will be shown
  // Remember to import the scene before adding it to the list
  scene: [ Cargar, Menu, Tuto, Opciones, Game, GameOver, ],
};

// Create a new Phaser game instance
window.game = new Phaser.Game(config);
