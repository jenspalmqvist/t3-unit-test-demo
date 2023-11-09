describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");

    cy.get('a[href*="snapshotTest"]').click();

    cy.url().should("include", "/snapshotTest");

    cy.get("h1").contains("Snapshot test page");

    cy.get('a[href*="/"]').click();

    cy.get("span").contains("Welcome back!");
  });
});
