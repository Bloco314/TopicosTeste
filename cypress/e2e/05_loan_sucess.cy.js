import { requestLoan } from "./_transactions";
import { cleanDb } from "./_dbManipulation";
import { Register } from "./_userSimulation";

describe("",()=>{
    it("",()=>{
        cleanDb();
        Register("Hans","123");
        requestLoan(100,100);
    });
});