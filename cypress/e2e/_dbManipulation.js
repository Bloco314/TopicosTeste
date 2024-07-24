const adress = "https://parabank.parasoft.com/parabank/index.htm";

export function cleanDb() {
  cy.visit(adress);
  cy.get("a").contains("Admin Page").click();
  cy.get("button[type=submit][name=action][value=CLEAN]").click();
}

export function initDb() {
  cy.visit(adress);
  cy.get("a").contains("Admin Page").click();
  cy.get("button[type=submit][name=action][value=INIT]").click();
}
