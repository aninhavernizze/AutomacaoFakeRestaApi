/// <reference types="cypress" />

const { endpointPaths } = require("../../../cypress.json");

describe ('Cenarios do endpoint GET Activies', () => {  
  context('Cenarios de falha', () => {  
    it('Validar erro quando informado id inválido', () => { 
      let activiesId = 10000;
      cy.get(`${endpointPaths.v1.urlActivies}/${activiesId}`).should((responseGet) => {     
        cy.validarResponseGetFalhaActivies(responseGet.body);   
      })     
    })
  })
})