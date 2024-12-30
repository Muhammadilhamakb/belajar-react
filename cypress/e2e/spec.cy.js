describe("User login", () => {
  it("should allow user to log in with valid credentials", () => {
    cy.visit("http://localhost:5173/");

    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com") // Sesuaikan jika placeholder berbeda
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************") // Sesuaikan jika placeholder berbeda
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();

    cy.get("nav").should("exist");
    cy.get("header").should("exist");
  });

  it("should not allow user to log in with invalid credentials", () => {
    cy.visit("http://localhost:5173/");

    cy.url().should("include", "/login");

    // Masukkan email tanpa tanda '@'
    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com") // Sesuaikan jika placeholder berbeda
      .type("helloexample.com")
      .should("have.value", "helloexample.com");

    // Masukkan password
    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************") // Sesuaikan jika placeholder berbeda
      .type("123")
      .should("have.value", "123");

    // Klik tombol login
    cy.get("button").contains("Login").click();

    // Tunggu dan periksa pesan error untuk email tidak valid
    cy.get("div", { timeout: 10000 })
      .should("be.visible")
      .contains("Invalid Email Format");
  });
});
