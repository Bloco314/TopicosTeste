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

export function Register(username, password, fill_fields = true, filler = "a") {
  cy.visit(adress);
  cy.get("a").contains("Register").click();

  // Always use this default values
  if (fill_fields) {
    cy.get('input[id="customer.firstName"]').type(filler);
    cy.get('input[id="customer.lastName"]').type(filler);
    cy.get('input[id="customer.address.street"]').type(filler);
    cy.get('input[id="customer.address.city"]').type(filler);
    cy.get('input[id="customer.address.state"]').type(filler);
    cy.get('input[id="customer.address.zipCode"]').type(filler);
    cy.get('input[id="customer.phoneNumber"]').type(filler);
    cy.get('input[id="customer.ssn"]').type(filler);
  }
  // Serious information or almost this
  cy.get('input[id="customer.username"]').type(username);
  cy.get('input[id="customer.password"]').type(password);
  cy.get('input[id="repeatedPassword"]').type(password);

  cy.get("input[type=submit]").contains("Register").click();
}

export function Logout() {
  cy.get("a").contains("Log Out").click();
}

export function OpenNewAcount() {
  cy.visit(adress);
  cy.get("a").contains("Open New Account").click();
  cy.wait(500);
  cy.get("input[type=button]").click();
  cy.get("a[id=newAccountId]")
}
