const Hoover = require("./app");
describe("Hoover", () => {
  let hoover;

  beforeEach(() => {
    hoover = new Hoover();
  });

  test("set hoover's initial position", () => {
    expect(hoover.position).toEqual({ x: 1, y: 2 });
  });
  
})
