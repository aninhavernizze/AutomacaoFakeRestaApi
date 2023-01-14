/// <reference types="cypress" />

const faker = require('faker-br');
const { endpointPaths } = require("../../../cypress.json");

var dataISODataHoraTmz = new Date();

describe ('Cenarios do endpoint PUT Activies', () => {  
  context('Cenarios de falha ', () => {
    it('Validar erro quando informado id null', () => {
      
      cy.fixture('activies').should((payloadActivies) => {
        payloadActivies.id = Math.floor(Math.random() * 256);
        payloadActivies.title = faker.name.firstName();
        payloadActivies.dueDate = dataISODataHoraTmz;
        payloadActivies.completed = true;           
          cy.put(`${endpointPaths.v1.urlActivies}/null`, payloadActivies).should((responseActivies) => {
            cy.validarResponseFalhaActivies(responseActivies.body);   
        }) 
      })     
    })
  })
})
  