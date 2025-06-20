describe("homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("displays carbonai title", () => {
    cy.contains("h1", "✨ CarbonAI - Ai Carbon Calculator 🌱");
  });
});
