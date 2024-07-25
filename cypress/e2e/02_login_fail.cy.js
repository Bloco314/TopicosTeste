import { Register } from "./_userSimulation";
import { cleanDb } from "./_dbManipulation";

describe("Testa uma tentativa de Login invalido", () => {
  it("Try login", () => {
    cleanDb();
    Register("Hanz Zimmer", "123", false);
    cy.contains("is required").should("be.visible");
  });
});
