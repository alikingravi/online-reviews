context("Home", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should see welcome details", () => {
    cy.contains("Login");
    cy.contains("Register");
    cy.contains("Welcome to Online Reviews!");
    cy.contains(
      "Please login to your account or register for a new one. Once logged in you can start reviewing our products!"
    );
    cy.contains("Please select what you would like to do.");
    cy.get(".login-btn").should("have.text", "Login");
    cy.get(".register-btn").should("have.text", "Register");
  });
});
