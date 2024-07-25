import { payBill } from "./_transactions";
import { cleanDb } from "./_dbManipulation";
import { OpenNewAcount, Register } from "./_userSimulation";

describe("", () => {
  it("tenta fazer uma transferencia", () => {
    cleanDb();
    Register("One", 1);
    OpenNewAcount();
    payBill("aaaaa", 100,"a", true);
  });
});
