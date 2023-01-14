/// <reference types="cypress" />

const { endpointPaths } = require("../../../cypress.json");

describe ('Cenarios do endpoint POST Activies', () => {  
  context('Cenarios de falha', () => {
    it('Validar erro quando não informado todas as informações', () => { 
      cy.fixture('activies').should((payloadActivies) => {
        payloadActivies.id = 0;
        payloadActivies.title = "";
        payloadActivies.dueDate = "";
        payloadActivies.completed = 0;
        cy.post(endpointPaths.v1.urlActivies, payloadActivies).should((responseActivies) => {
          cy.validarResponseFalhaActivies(responseActivies.body);         
        }) 
      })     
    })
  })
})