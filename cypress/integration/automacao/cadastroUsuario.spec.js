/// <reference types="Cypress" />

describe("Cadastro de usuários", () => {
    beforeEach(() => {
        cy.visit('https://automacaocombatista.herokuapp.com/users/new')
    })

    it("Cadastrar um usuário com sucesso", () => {
        cy.get('#user_name').type('João')
        cy.get('#user_lastname').type('da Silva')
        cy.get('#user_email').type('joao@silva.com')
        cy.get('[name=commit]').click()
        cy.get('#notice').should('contain', 'Usuário Criado com sucesso')
    })
})