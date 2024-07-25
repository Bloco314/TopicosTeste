import {
  searchTransationByAmount,
  searchTransationByDate,
  searchTransationByDateRange,
} from "./_transactions";
import { cleanDb } from "./_dbManipulation";
import { Register } from "./_userSimulation";

describe("", () => {
  it("Testa com Data MM-YYYY-DD", () => {
    cleanDb();
    Register("Hans", "123");
    searchTransationByDateRange("05-2024-06", "07-2024-24");
    cy.wait(1000);
  });

  it("Testa com Data MM-YYYY-DD", () => {
    cleanDb();
    Register("Hans", "123");
    searchTransationByAmount("Cem Reais");
    cy.wait(1000);
  });

  it("Testa com Data MM-YYYY-DD", () => {
    cleanDb();
    Register("Hans", "123");
    searchTransationByDate("05-2024-06");
    cy.wait(1000);
    //chama função de novo
  });
});
