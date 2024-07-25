import {
  searchTransationByAmount,
  searchTransationByDate,
  searchTransationByDateRange,
} from "./_transactions";
import { cleanDb } from "./_dbManipulation";
import { Register } from "./_userSimulation";

describe("", () => {
  it("Faz consulta a transações", () => {
    cleanDb();
    Register("Hans", "123");
    searchTransationByAmount("100");
    cy.wait(1000);
  });

  it("Entrada por quantidade", () => {
    cleanDb();
    Register("Hans", "123");
    searchTransationByDateRange("05-06-2024", "10-08-2024");
    cy.wait(1000);
  });

  it("Entrada com Data MM-YYYY-DD", () => {
    cleanDb();
    Register("Hans", "123");
    searchTransationByDate("05-08-2024");
    cy.wait(1000);
  });
});
