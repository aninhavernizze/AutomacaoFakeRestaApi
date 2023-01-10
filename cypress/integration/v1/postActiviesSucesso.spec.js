/// <reference types="cypress" />

const faker = require('faker-br');
const { endpointPaths } = require("../../../cypress.json");

var dataISODataHoraTmz = new Date();

context('Cenarios de sucesso do endpoint POST Activies', () => {
  it('Validar passando todas as informações', () => { 
    cy.fixture('activies').should((payloadActivies) => {
      payloadActivies.id = Math.floor(Math.random() * 256);
      payloadActivies.title = faker.name.firstName();
      payloadActivies.dueDate = dataISODataHoraTmz;
      payloadActivies.completed = true;
      cy.post(endpointPaths.v1.postActivies, payloadActivies).should((responsePostActivies) => {
        cy.validarResponsePostActivies(responsePostActivies.body);         
      }) 
    })     
  })

  it('Validar informando o concluido como false', () => { 
    cy.fixture('activies').should((payloadActivies) => {
      payloadActivies.id = Math.floor(Math.random() * 256);
      payloadActivies.title = faker.name.firstName();
      payloadActivies.dueDate = dataISODataHoraTmz;
      payloadActivies.completed = false;
      cy.post(endpointPaths.v1.postActivies, payloadActivies).should((responsePostActivies) => {
        cy.validarResponsePostActivies(responsePostActivies.body);         
      }) 
    })     
  })
})
  