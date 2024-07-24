import { cleanDb, initDb } from "./dbManipulation";
import { Register, Login, Logout } from "./userSimulation";

describe("Testing a site for my beloved Jonathan", () => {
  it("cleans the database", () => {
    cleanDb();
  });

  // it("inits the database", () => {
  //   initDb();
  // });

  // it("Try a invalid Login", () => {
  //   Login("Jose123", "1234");
  //   cy.wait(3000);
  // });

  // it("Register a new user", () => {
  //   Register("Jose123", 123);
  //   cy.wait(3000);
  // });

  // it("Try a valid Login", () => {
  //   Login("Jose123", "123");
  //   cy.wait(3000);
  // });

  // it("Logout", () => {
  //   Logout();
  // });
});
