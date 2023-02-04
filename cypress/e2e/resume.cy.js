const url = 'htp://localhost:3000/resume/url'

describe('test resume page', () => {
  it('should have the correct content', () => {
    cy.visit('url')
    .get('h1')
  })
})