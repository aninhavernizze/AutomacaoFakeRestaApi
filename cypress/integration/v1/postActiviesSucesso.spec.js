/// <reference types="cypress" />

const faker = require('faker-br');
const { endpointPaths } = require("../../../cypress.json");

var dataISODataHoraTmz = new Date();
describe ('Cenarios do endpoint POST Activies', () => {  
  context('Cenarios de sucesso', () => {
    it('Validar passando todas as informações', () => { 
      cy.fixture('activies').should((payloadActivies) => {
        payloadActivies.id = Math.floor(Math.random() * 256);
        payloadActivies.title = faker.name.firstName();
        payloadActivies.dueDate = dataISODataHoraTmz;
        payloadActivies.completed = true;
          cy.post(endpointPaths.v1.urlActivies, payloadActivies).should((responseActivies) => {
            cy.validarResponseActivies(responseActivies.body);         
        }) 
      })     
    })

    it('Validar informando o concluido como false', () => { 
      cy.fixture('activies').should((payloadActivies) => {
        payloadActivies.id = Math.floor(Math.random() * 256);
        payloadActivies.title = faker.name.firstName();
        payloadActivies.dueDate = dataISODataHoraTmz;
        payloadActivies.completed = false;
          cy.post(endpointPaths.v1.urlActivies, payloadActivies).should((responseActivies) => {
            cy.validarResponseActivies(responseActivies.body);         
        }) 
      })     
    })
  })
})
  