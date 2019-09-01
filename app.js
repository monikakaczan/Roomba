const fs = require("fs");

const data = fs.readFileSync("./src/input.txt").toString().split("\n");
const roomData = data.slice(0, 1).toString().split(" ");
const hooverInitPosition = data.slice(1, 2).toString().split(" ");
const dirtCoordinates = data.slice(2, 5)
const directions=data[5].split("");
