const adress = "https://parabank.parasoft.com/parabank/index.htm";

export function fundsTransference(amount) {
  cy.get("a").contains("transfer").click();
  cy.get('input[id="amount"]').type(amount);

  cy.get("input[type=submit]").contains("Transfer").click();
}

export function searchTransationByDate(date) {
  cy.get('a[href="findtrans.htm"]').should('be.visible').click();
  cy.get('input[id="transactionDate"]').type(date);

  cy.get('button[id="findByDate"]').click();
}

export function searchTransationByAmount(amount) {
  cy.get('a[href="findtrans.htm"]').should('be.visible').click();
  cy.get('input[id="amount"]').type(amount);
  cy.get('button[id="findByAmount"]').click();
}

export function searchTransationByDateRange(initialDate, finalDate) {
  cy.get('a[href="findtrans.htm"]').should('be.visible').click();
  cy.get('input[id="fromDate"]').type(initialDate);
  cy.get('input[id="toDate"]').type(finalDate);

  cy.get('button[id="findByDateRange"]').click();
}

export function requestLoan(loan, entry) {
  cy.get("a").contains("Request Loan").click();
  cy.get('input[id="amount"]').type(loan);
  cy.get('input[id="downPayment"]').type(entry);

  cy.get("input[type=button]").click();
}

export function payBill(account, amount, filler = "a", failmode = false) {
  cy.visit(adress);
  cy.get("a").contains("Bill Pay").click();

  cy.get("input[name='payee.name']").type(filler);
  cy.get("input[name='payee.address.street']").type(filler);
  cy.get("input[name='payee.address.city']").type(filler);
  cy.get("input[name='payee.address.state']").type(filler);
  cy.get("input[name='payee.address.zipCode']").type(filler);
  cy.get("input[name='payee.phoneNumber']").type(filler);

  cy.get("input[name='payee.accountNumber']").type(account);
  cy.get("input[name=verifyAccount]").type(account);
  cy.get("input[name=amount]").type(amount);

  cy.wait(250);

  cy.get("input[type=button]").click();
  
  if (failmode) {
    cy.contains("valid number").should("be.visible");
  } else {
    cy.contains("was successful").should("be.visible");
  }
}
