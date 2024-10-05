export class LpProblem {
  of: string | null;
  constraints: string[];
  constructor(of?: string, constraints?: string[]) {
    this.of = of ? of : null;
    this.constraints = constraints ? constraints : [];
  }

  setObjectiveFunction(of: string) {
    this.of = of;
  }

  setConstraints(constraints: string[]) {
    this.constraints = constraints;
  }
  getObjectiveFunction() {
    return this.of;
  }

  addConstaint(c: string) {
    this.constraints.push(c);
  }

  addConstaints(cs: string[]) {
    cs.forEach((c) => {
      this.constraints.push(c);
    });
  }

  getConstraints() {
    return this.constraints;
  }

  summary(): string {
    let summary = "";
    if (this.of) {
      summary = summary + `OF:\n${this.of}\n\n`;
    } else {
      summary = summary + "OF: null\n\n";
    }
    if (this.constraints) {
      summary += "Constraints:\n";
      this.constraints.forEach((c, i) => {
        summary += `${i + 1}. ${c}${i == this.constraints.length - 1 ? "" : "\n"}`;
      });
    } else {
      summary += `constraints: []`;
    }
    return summary;
  }
}
