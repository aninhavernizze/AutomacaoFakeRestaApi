/// <reference types="cypress" />

const { endpointPaths } = require("../../../cypress.json");

describe ('Cenarios do endpoint DELETE Activies', () => {  
    context('Cenarios de falha ', () => {
        it('Validar erro ao excluir quando informado id null', () => {           
            cy.delete(`${endpointPaths.v1.urlActivies}/null` ).should((responseActivies) => {
                cy.validarResponseFalhaActivies(responseActivies.body);  
            }) 
        })    
    })
})
  