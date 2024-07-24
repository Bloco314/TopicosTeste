import { Login } from "./userSimulation";

describe("Testa uma tentativa de Login invalido", () => {
  it("Try login", () => {
    Login("Hans Zimmer", "1234", true);
  });
});
