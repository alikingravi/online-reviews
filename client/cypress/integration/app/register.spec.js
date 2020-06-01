context("Register", () => {
  beforeEach(() => {
    cy.visit("/register");
  });

  it("should see registration form details", () => {
    cy.get(".card-header").should("have.text", "Register");
    cy.contains("Login");
    cy.contains("Register");
    cy.contains("Name");
    cy.contains("Email");
    cy.contains("Password");
    cy.contains("Register as Admin (for demo purposes)");
    cy.contains("Already have an account? Login");
  });

  it("should see register validation error messages", () => {
    cy.get("button[type=submit]").click();
    cy.contains("name is a required field");
    cy.contains("email is a required field");
    cy.contains("password is a required field");
  });
});
