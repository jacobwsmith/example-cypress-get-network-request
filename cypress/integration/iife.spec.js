/// <reference types="Cypress" />

context('Get Network Request Example', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:4201/index.html')
  })

  it('should load the proper request.js', () => {
    cy.window().then(win => {
      // More info: https://developer.mozilla.org/en-US/docs/Web/API/Performance/getEntriesByName
      expect(
        win.performance.getEntriesByName('http://127.0.0.1:4201/request.js')
          .length
      ).eq(1)
    })
  })
})
