import { payBill } from "./transations";
import { cleanDb } from "./_dbManipulation";
import { OpenNewAcount, Register } from "./_userSimulation";

describe("", () => {
  it("tenta fazer uma transferencia", () => {
    cleanDb();
    Register("One", 1);
    OpenNewAcount();
    payBill("14121", 100);
  });
});
