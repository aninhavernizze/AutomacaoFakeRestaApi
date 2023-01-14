/// <reference types="cypress" />

const { endpointPaths } = require("../../../cypress.json");

describe ('Cenarios do endpoint GET Activies', () => {  
  context('Cenarios de sucesso', () => { 
    it('Buscar todas as informações', () => {       
      cy.get(endpointPaths.v1.urlActivies).should((responseGet) => {     
        cy.validarResponseGetActivies(responseGet.body);   
      })     
    })

    it('Buscar informações passando id', () => { 
      let activiesId = Math.floor(Math.random() * 30);
      cy.get(`${endpointPaths.v1.urlActivies}/${activiesId}`).should((responseGet) => {     
        cy.validarResponseGetActiviesId(responseGet.body);   
      })     
    })
  })
})
