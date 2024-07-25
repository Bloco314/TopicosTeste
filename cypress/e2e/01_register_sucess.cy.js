import { Login, Logout, Register } from "./_userSimulation";
import { cleanDb } from "./_dbManipulation";

describe("", () => {
  it("Cria uma conta, faz logout e então login", () => {
    cleanDb();
    Register("Hanz Zimmer", "1234");
    cy.wait(1000);
    Logout();
    cy.wait(1000);
    Login("Hanz Zimmer", "1234");
    cy.wait(1000);
  });
});
