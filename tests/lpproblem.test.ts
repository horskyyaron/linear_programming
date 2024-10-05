import { LpProblem } from "../src/lps/lpproblem";

describe("Healthcheck", () => {
  it("should create of and get it", () => {
    const lpp = new LpProblem();
    lpp.setObjectiveFunction("2x + 5y");
    const of = lpp.getObjectiveFunction();
    expect(of).toBe("2x + 5y");
  });

  it("should be able to add constraints", () => {
    const lpp = new LpProblem();
    lpp.addConstaint("x + 2y <= 16");
    const constraints = lpp.getConstraints();
    expect(constraints).toStrictEqual(["x + 2y <= 16"]);
    lpp.addConstaint("x + 4y <= 30");
    expect(constraints).toStrictEqual(["x + 2y <= 16", "x + 4y <= 30"]);
    const lpp2 = new LpProblem();
    lpp2.addConstaints(["x + 4y <= 30", "x + 2y <= 16"]);
    const constraints2 = lpp2.getConstraints();
    expect(constraints2).toStrictEqual(["x + 4y <= 30", "x + 2y <= 16"]);
  });

  it("should print the lp problem", () => {
    const lpp = new LpProblem();
    lpp.setObjectiveFunction("2x + 5y");
    lpp.addConstaint("x + 2y <= 16");
    const constraints = lpp.getConstraints();
    expect(constraints).toStrictEqual(["x + 2y <= 16"]);
    lpp.addConstaint("5x + 3y <= 45");
    lpp.addConstaint("x >= 0");
    lpp.addConstaint("y >= 0");
    expect(lpp.summary()).toBe(
      "OF:\n2x + 5y\n\nConstraints:\n1. x + 2y <= 16\n2. 5x + 3y <= 45\n3. x >= 0\n4. y >= 0",
    );
  });
});
