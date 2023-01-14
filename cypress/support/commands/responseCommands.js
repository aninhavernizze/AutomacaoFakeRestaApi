/// <reference types="Cypress" />

Cypress.Commands.add('validarResponseActivies', (responseActivies) =>{
    // Validações do schema em cenario de sucesso
    expect(responseActivies).to.be.an("object"); 
    expect("O id é: 'number'")
        .to.eq("O id é: '" + typeof(responseActivies.id) +"'");
    expect("O titulo é: 'string'")
        .to.eq("O titulo é: '" + typeof(responseActivies.title) +"'");
    expect("A data é: 'string'")
        .to.eq("A data é: '" + typeof(responseActivies.dueDate) +"'");
    expect("O concluído é: 'boolean'")
        .to.eq("O concluído é: '" + typeof(responseActivies.completed) +"'");
})

Cypress.Commands.add('validarResponseFalhaActivies', (responsetActivies) =>{
    // Validações do schema em cenario de falha
    expect(`statusCode: ${responsetActivies.status}`)
        .to.eq(`statusCode: 400`);
    expect("O type é: 'string'")
        .to.eq("O type é: '" + typeof(responsetActivies.type) +"'");
    expect("O title é: 'string'")
        .to.eq("O title é: '" + typeof(responsetActivies.title) +"'");
    expect("O status é: 'number'")
        .to.eq("O status é: '" + typeof(responsetActivies.status) +"'");
    expect("O traceId é: 'string'")
        .to.eq("O traceId é: '" + typeof(responsetActivies.traceId) +"'");
    expect("O errors é: 'object'")
        .to.eq("O errors é: '" + typeof(responsetActivies.errors) +"'"); 
})

Cypress.Commands.add('validarResponseGetActivies', (responseGetActivies) =>{
    // Validações do schema em cenario de sucesso
    responseGetActivies.forEach(responseGet => {
        expect("O id é: 'number'")
            .to.eq("O id é: '" + typeof(responseGet.id) +"'");
        expect("O titulo é: 'string'")
            .to.eq("O titulo é: '" + typeof(responseGet.title) +"'");
        expect("A data é: 'string'")
            .to.eq("A data é: '" + typeof(responseGet.dueDate) +"'");
        expect("O concluído é: 'boolean'")
            .to.eq("O concluído é: '" + typeof(responseGet.completed) +"'");
    });
})

Cypress.Commands.add('validarResponseGetActiviesId', (responseGetActivies) =>{
    // Validações do schema em cenario de sucesso  
    expect("O id é: 'number'")
        .to.eq("O id é: '" + typeof(responseGetActivies.id) +"'");
    expect("O titulo é: 'string'")
        .to.eq("O titulo é: '" + typeof(responseGetActivies.title) +"'");
    expect("A data é: 'string'")
        .to.eq("A data é: '" + typeof(responseGetActivies.dueDate) +"'");
    expect("O concluído é: 'boolean'")
        .to.eq("O concluído é: '" + typeof(responseGetActivies.completed) +"'");
})

Cypress.Commands.add('validarResponseGetFalhaActivies', (responseGet) =>{
    // Validações do schema em cenario de falha
    expect(`statusCode: ${responseGet.status}`)
        .to.eq(`statusCode: 404`);
    expect("O type é: 'string'")
        .to.eq("O type é: '" + typeof(responseGet.type) +"'");
    expect("O title é: 'string'")
        .to.eq("O title é: '" + typeof(responseGet.title) +"'");
    expect("O status é: 'number'")
        .to.eq("O status é: '" + typeof(responseGet.status) +"'");
    expect("O traceId é: 'string'")
        .to.eq("O traceId é: '" + typeof(responseGet.traceId) +"'");
})