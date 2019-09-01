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
    hoover.moveHoover();
    expect(hoover.position).toEqual({ x: 1, y: 3 });
  });
  test("clean all the dirt patches on hoover's way", () => {
    hoover.moveHoover();
    hoover.cleanDirts()
    expect(hoover.dirtCounter).toEqual(1)
  })
  test("move the hoover one grid north", () => {
    hoover.moveHoover("N")
    expect(hoover.position).toEqual({ x: 1, y: 3 })
  })
});
