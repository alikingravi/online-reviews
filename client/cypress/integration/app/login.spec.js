context("Login", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("should see login form details", () => {
    cy.get(".card-header").should("have.text", "Login");
    cy.contains("Login");
    cy.contains("Register");
    cy.contains("Email");
    cy.contains("Password");
    cy.contains("Don't have an account yet? Register");
  });

  it("should see login validation error messages", () => {
    cy.get("button[type=submit]").click();
    cy.contains("email is a required field");
    cy.contains("password is a required field");
  });

  it("should show login error on incorrect credentials", () => {
    cy.login("admin@test.com", "1234567");
    cy.contains("Username or password is invalid");
  });

  it("should login successfully as admin", () => {
    cy.login("admin@test.com", "qweasdf");

    cy.contains("Welcome Boss");
    cy.contains("Admin");
    cy.contains("My Dashboard");
    cy.get(".admin-badge").should("exist");
    cy.get("a[data-tip=Users]").should("exist");
    cy.get("a[data-tip=Products]").should("exist");
    cy.get("a[data-tip='Add New Product']").should("exist");
    cy.get("a[data-tip='My Dashboard']").should("exist");
    cy.get("a[data-tip='My Reviews']").should("exist");
    cy.get("a[data-tip='Logout']").should("exist");
  });

  it("should login successfully as non admin", () => {
    cy.login("nonadmin@test.com", "qweasdf");

    cy.contains("Welcome Joe");
    cy.get(".admin-badge").should("not.exist");
    cy.get("a[data-tip=Users]").should("not.exist");
    cy.get("a[data-tip=Products]").should("not.exist");
    cy.get("a[data-tip='Add New Product']").should("not.exist");
    cy.get("a[data-tip='My Dashboard']").should("exist");
    cy.get("a[data-tip='My Reviews']").should("exist");
    cy.get("a[data-tip='Logout']").should("exist");
    cy.contains("My Dashboard");
  });

  it("should successfully logout", () => {
    cy.login("admin@test.com", "qweasdf");

    // Logout
    cy.logout();
    cy.contains("Welcome to Online Reviews!");
  });
});
