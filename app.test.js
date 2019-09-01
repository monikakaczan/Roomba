const Hoover = require("./app");
describe("Hoover", () => {
  let hoover;

  beforeEach(() => {
    hoover = new Hoover();
  });

  test("set hoover's initial position", () => {
    expect(hoover.position).toEqual({ x: 1, y: 2 });
  });
  test("set final position of the hoover after processing the directions", () => {
    hoover.moveHoover(['N', 'N', 'E', 'S', 'E', 'E', 'S', 'W', 'N', 'W', 'W'])
    expect(hoover.position).toEqual({x:1, y:3})
  })
})
