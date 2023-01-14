/// <reference types="Cypress" />

const config = require("../../../cypress")

Cypress.Commands.add('get', (path) => {
    cy.api({
        method: 'GET',
        url: path,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('post', (path, payload) => {
    cy.api({
        method: 'POST',
        url: path,
        body: payload,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('put', (path, payload) =>{
    cy.api({
        method: 'PUT',
        url: path,
        body: payload,
        failOnStatusCode: false
    })
})
