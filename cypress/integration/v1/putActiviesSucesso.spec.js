/// <reference types="cypress" />

const faker = require('faker-br');
const { endpointPaths } = require("../../../cypress.json");

var dataISODataHoraTmz = new Date();

describe ('Cenarios do endpoint PUT Activies', () => {  
  context('Cenarios de sucesso ', () => {
    it('Validar alterando todas as informações', () => {
      let activiesId = Math.floor(Math.random() * 30);

      cy.fixture('activies').should((payloadActivies) => {
        payloadActivies.id = Math.floor(Math.random() * 256);
        payloadActivies.title = faker.name.firstName();
        payloadActivies.dueDate = dataISODataHoraTmz;
        payloadActivies.completed = true;           
          cy.put(`${endpointPaths.v1.urlActivies}/${activiesId}`, payloadActivies).should((responseActivies) => {
            cy.validarResponseActivies(responseActivies.body); 
        }) 
      })     
    })
  })
})
  