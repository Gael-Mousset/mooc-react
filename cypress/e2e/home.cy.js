describe("Home", () => {
  it("deverait contenir des lien cliquables", () => {
    cy.visit("/");
    cy.contains("Users");
    cy.contains("Coumpteur");
    cy.contains("Roles");
    cy.contains("Inscrivez-vous !").click();
    cy.url().should("eq", Cypress.config().baseUrl + "register");
  });
});
