const adress = "https://parabank.parasoft.com/parabank/index.htm";

export function Login(username, password, shouldFail = false) {
  cy.visit(adress);
  cy.get("input[name=username]").type(username);
  cy.get("input[name=password]").type(password);
  cy.get("input[type=submit]").click();

  if (shouldFail) {
    cy.contains("The username and password could not be verified.")
      .should("be.visible")
      .then(() => {
        alert("Teste bem sucedido.");
      });
  }
}

export function Register(username, password) {
  cy.visit(adress);
  cy.get("a").contains("Register").click();

  // Always use this default values
  cy.get('input[id="customer.firstName"]').type("Hans");
  cy.get('input[id="customer.lastName"]').type("Zimmer");
  cy.get('input[id="customer.address.street"]').type("Topicos");
  cy.get('input[id="customer.address.city"]').type("Testopolis");
  cy.get('input[id="customer.address.state"]').type("Active State F.R.");
  cy.get('input[id="customer.address.zipCode"]').type("Winrar");
  cy.get('input[id="customer.phoneNumber"]').type("40028922");
  cy.get('input[id="customer.ssn"]').type("Did you mean cpf");

  // Serious information or almost this
  cy.get('input[id="customer.username"]').type(username);
  cy.get('input[id="customer.password"]').type(password);
  cy.get('input[id="repeatedPassword"]').type(password);

  cy.get("input[type=submit]").contains("Register").click();
}

export function Logout() {
  cy.get("a").contains("Log Out").click();
}
