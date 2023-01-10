/// <reference types="Cypress" />

Cypress.Commands.add('validarResponsePostActivies', (responsePostActivies) =>{
    // Validações do schema em cenario de sucesso
    expect(responsePostActivies).to.be.an("object"); 
    expect("O id é: 'number'")
        .to.eq("O id é: '" + typeof(responsePostActivies.id) +"'");
    expect("O titulo é: 'string'")
        .to.eq("O titulo é: '" + typeof(responsePostActivies.title) +"'");
    expect("A data é: 'string'")
        .to.eq("A data é: '" + typeof(responsePostActivies.dueDate) +"'");
    expect("O concluído é: 'boolean'")
        .to.eq("O concluído é: '" + typeof(responsePostActivies.completed) +"'");
})

Cypress.Commands.add('validarResponsePostFalhaActivies', (responsePostActivies, response) =>{
    // Validações do schema em cenario de falha
   console.log(responsePostActivies)
    expect(`statusCode: ${responsePostActivies.status}`)
        .to.eq(`statusCode: 400`);
    expect("O type é: 'string'")
        .to.eq("O type é: '" + typeof(responsePostActivies.type) +"'");
    expect("O title é: 'string'")
        .to.eq("O title é: '" + typeof(responsePostActivies.title) +"'");
    expect("O status é: 'number'")
        .to.eq("O status é: '" + typeof(responsePostActivies.status) +"'");
    expect("O traceId é: 'string'")
        .to.eq("O traceId é: '" + typeof(responsePostActivies.traceId) +"'");
    expect("O errors é: 'object'")
        .to.eq("O errors é: '" + typeof(responsePostActivies.errors) +"'"); 
})