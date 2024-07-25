import { requestLoan } from "./_transactions";
import { cleanDb } from "./_dbManipulation";
import { Register } from "./_userSimulation";

describe("", () => {
  it("testa entradas nulas", () => {
    cleanDb();
    Register("Hans", "123");
    requestLoan(0, 0);
    cy.contains("error").should("be.visible");
  });

  it("testa entradas do tipo errado", () => {
    cleanDb();
    Register("Hans", "123");
    requestLoan("a", "a");
    cy.contains("error").should("be.visible");
  });
});
