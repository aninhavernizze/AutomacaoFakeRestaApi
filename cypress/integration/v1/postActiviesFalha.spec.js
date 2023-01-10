/// <reference types="cypress" />

const { endpointPaths } = require("../../../cypress.json");

context('Cenarios de sucesso do endpoint POST Activies', () => {
  it('Validar passando todas as informações', () => { 
    cy.fixture('activies').should((payloadActivies) => {
      payloadActivies.id = 0;
      payloadActivies.title = "";
      payloadActivies.dueDate = "";
      payloadActivies.completed = 0;
      cy.post(endpointPaths.v1.postActivies, payloadActivies).should((responsePostActivies) => {
        cy.validarResponsePostFalhaActivies(responsePostActivies.body);         
      }) 
    })     
  })
})