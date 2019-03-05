describe('Kampagne', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001')
    cy.get('nav > a')
      .contains('Kampagne')
      .click()
  })

  it('has the right path', () => {
    cy.location('pathname').should('include', 'create')
  })

  it('has a complete form', () => {
    cy.get('form').should('have.length', 1)
    cy.get('input').should('have.length', 5)
    cy.get('form > button').should('have.length', 1)
  })

  it('shows a campaign preview with title', () => {
    const testValue = 'This is a campaign name'
    cy.get('section')
      .contains(testValue)
      .should('have.length', 0)
    cy.get('input[name="title"]').type(testValue)
    cy.get('section')
      .contains(testValue)
      .should('have.length', 1)
  })

  it('shows a campaign preview with brand', () => {
    const testValue = 'This is the brand'
    cy.get('section')
      .contains(testValue)
      .should('have.length', 0)
    cy.get('input[name="brand"]').type(testValue)
    cy.get('section')
      .contains(testValue)
      .should('have.length', 1)
  })

  it('shows a campaign preview with scheduleFrom', () => {
    const testValue = '2019-08-08'
    cy.get('section')
      .contains(testValue)
      .should('have.length', 0)
    cy.get('input[name="scheduleFrom"]').type(testValue)
    cy.get('section')
      .contains(testValue)
      .should('have.length', 1)
  })

  it('shows a campaign preview with scheduleTo', () => {
    const testValue = '2019-09-09'
    cy.get('section')
      .contains(testValue)
      .should('have.length', 0)
    cy.get('input[name="scheduleTo"]').type(testValue)
    cy.get('section')
      .contains(testValue)
      .should('have.length', 1)
  })

  it('creates tags from tag input', () => {
    const testValue = 'fussball, tennis, federball'
    cy.get('[data-cy="preview-container"]')
      .children()
      .should('have.length', 0)
    cy.get('input[name="tags"]').type(testValue)
    cy.get('[data-cy="preview-container"] ul > li').should('have.length', 3)
    cy.get('[data-cy="preview-container"] ul > li')
      .first()
      .should('contain', 'fussball')
  })

  it('clears all inputs after submit', () => {
    cy.get('input[name="title"]').type('nivea')
    cy.get('input[name="brand"]').type('beiersdorf')
    cy.get('input[name="scheduleFrom"]').type('2019-08-08')
    cy.get('input[name="scheduleTo"]').type('2019-09-09')
    cy.get('input[name="tags"]').type('creme')
    cy.get('form > button').click()

    cy.get('input[name="title"]').should('have.value', '')
    cy.get('input[name="brand"]').should('have.value', '')
    cy.get('input[name="scheduleFrom"]').should('have.value', '')
    cy.get('input[name="scheduleTo"]').should('have.value', '')
    cy.get('input[name="tags"]').should('have.value', '')
  })
})
