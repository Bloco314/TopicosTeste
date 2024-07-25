const adress = "https://parabank.parasoft.com/parabank/index.htm";

export function fundsTransference(amount){
    cy.get("a").contains("transfer").click();
    cy.get('input[id="amount"]').type(amount);

    cy.get("input[type=submit]").contains("Transfer").click();
}

export function searchTransationByDate(date){
    cy.get("a").contains("findtrans").click();
    cy.get('input[id="transactionDate"]').type(date);

    cy.get('input[id="findByDate"]').click();
}

export function searchTransationByAmount(amount){
    cy.get("a").contains("findtrans").click();
    cy.get('input[id="amount"]').type(amount);

    cy.get('input[id="findByAmount"]').click();
}

export function searchTransationByDateRange(initialDate, finalDate){
    cy.get("a").contains("findtrans").click();
    cy.get('input[id="fromDate"]').type(initialDate);
    cy.get('input[id="toDate"]').type(finalDate);

    cy.get('input[id="findByDateRange"]').click();
}

export function requestLoan(loan, entry){
    cy.get("a").contains("requestloan").click();
    cy.get('input[id="amount"]').type(loan);
    cy.get('input[id="downPayment"]').type(entry);

    cy.get("input[type=submit]").contains("Apply Now").click();
}

export function payBill(payeeName, payeeAddress, city, state, zipCode, phone, account, verifyAccount, amount){
    cy.get("a").contains("billpay").click();
    cy.get("input[name=payee.name]").type(payeeName);
    cy.get("input[name=payee.address.street]").type(payeeAddress);
    cy.get("input[name=payee.address.city]").type(city);
    cy.get("input[name=payee.address.state]").type(state);
    cy.get("input[name=payee.address.zipCode]").type(zipCode);
    cy.get("input[name=payee.phoneNumber]").type(phone);
    cy.get("input[name=payee.accountNumber]").type(account);
    cy.get("input[name=verifyAccount]").type(verifyAccount);
    cy.get("input[name=amount]").type(amount);

    cy.get("input[type=submit]").contains("Send Payment").click();
}