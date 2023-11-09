describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");

    cy.get('a[href*="typingTest"]').click();

    cy.url().should("include", "/typingTest");

    cy.get("input").type("Hello World!");

    cy.get("input").should("have.value", "Hello World!");
  });
});
