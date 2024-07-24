const adress = "https://parabank.parasoft.com/parabank/index.htm";

export function fundsTransference(amount){
    cy.get("a").contains("transfer").click();
    cy.get('input[id="amount"]').type(amount);

    cy.get("input[type=submit]").contains("Transfer").click();
}

export function searchTransationByDate(date){
    cy.get("a").contains("findtrans").click();
    cy.get('input[id="transactionDate"]').type(date);

    cy.get("input[type=submit]").contains("findByDate").click();
}

export function searchTransationByAmount(amount){
    cy.get("a").contains("findtrans").click();
    cy.get('input[id="amount"]').type(amount);

    cy.get("input[type=submit]").contains("findByAmount").click();
}

export function searchTransationByDateRange(initialDate, finalDate){
    cy.get("a").contains("findtrans").click();
    cy.get('input[id="fromDate"]').type(initialDate);
    cy.get('input[id="toDate"]').type(finalDate);

    cy.get("input[type=submit]").contains("findByDateRange").click();
}

export function requestLoan(loan, entry){
    cy.get("a").contains("requestloan").click();
    cy.get('input[id="amount"]').type(loan);
    cy.get('input[id="downPayment"]').type(entry);

    cy.get("input[type=submit]").contains("Apply Now").click();
}
