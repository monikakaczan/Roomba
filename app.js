const fs = require("fs");

const data = fs
  .readFileSync("./src/input.txt")
  .toString()
  .split("\n");
const roomData = data
  .slice(0, 1)
  .toString()
  .split(" ");
const hooverInitPosition = data
  .slice(1, 2)
  .toString()
  .split(" ");
const dirtCoordinates = data.slice(2, 5);
const directions = data[5].split("");

class Hoover {
  constructor() {
    this.roomDimensions = { x: Number(roomData[0]), y: Number(roomData[1]) };
    this.position = {
      x: Number(hooverInitPosition[0]),
      y: Number(hooverInitPosition[1])
    };
    this.dirtPatches = dirtCoordinates.map(dirt => {
      let eachDirt = dirt.split(" ");
      let dirtPatch = { x: 0, y: 0 };
      dirtPatch.x = Number(eachDirt[0]);
      dirtPatch.y = Number(eachDirt[1]);
      return dirtPatch;
    });

    this.directions = directions;
    this.dirtCounter = 0;
    this.everyPosition = [];
  }

moveHoover() {
  this.directions.forEach(direction=> {
    switch(direction){
      case "N":
      (this.position.y <= this.roomDimensions.y) && (this.position.y > 0)
          ? (this.position.y += 1)
          : this.position.y
          break;
          case "S":
        (this.position.y <= this.roomDimensions.y)&& (this.position.y > 0)
          ? (this.position.y -= 1)
          : this.position.y;
        break;
        case "E":
        (this.position.x != this.roomDimensions.x) && (this.position.x > 0)
          ? (this.position.x += 1)
          : this.position.x;
        break;
        case "W":
        (this.position.x != this.roomDimensions.x)  && (this.position.x > 0)
          ? (this.position.x -= 1)
          : this.position.x;
        break;
    }
  })
}



}

module.exports = Hoover;
