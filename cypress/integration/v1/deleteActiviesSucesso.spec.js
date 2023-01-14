/// <reference types="cypress" />

const { endpointPaths } = require("../../../cypress.json");

describe ('Cenarios do endpoint DELETE Activies', () => {  
    context('Cenarios de sucesso ', () => {
        it('Validar exlusão indormando o id', () => {
            let activiesId = Math.floor(Math.random() * 30);
            cy.delete(`${endpointPaths.v1.urlActivies}/${activiesId}` ).should((responseActivies) => {
                expect(`statusCode: ${responseActivies.status}`).to.eq(`statusCode: 200`); 
            }) 
        })    
    })
})
  