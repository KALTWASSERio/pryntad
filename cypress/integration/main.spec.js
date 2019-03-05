describe('pryntad', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001')
  })

  describe('Home', () => {
    it('has the correct title', () => {
      cy.title().should('include', 'pryntad')
    })

    it('shows the correct header', () => {
      cy.get('[data-cy="header-logo"]').should('have.attr', 'alt', 'logo')
    })
  })
})
