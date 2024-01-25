beforeEach(function () {
  cy.visit('http://localhost:5000')
})

describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})

describe('Page navigation', function () {
  it('ensures the right Pokemon gets opened', function () {
    cy.contains('charmander').click()
    cy.contains('blaze')
  })
})