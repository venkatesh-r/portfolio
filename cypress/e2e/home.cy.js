/* global cy */ //to remove the elint cy error

describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/")

    cy.get('[data-testid="cypress-h1"]', { timeout: 10000 }).should(
      "contain.text",
      "Hi,I'm VenkateshWeb Developer."
    )

    cy.get("h2").should("have.text", "Frontend Developer | React | Javascript")
    cy.get("a").should("have.text", "CONTACT ME Download CV ", {
      timeout: 10000,
    })
    cy.get(".about-link").click()
  })
})
