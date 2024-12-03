describe('Login Page', () => {
  it('debería permitir al usuario iniciar sesión', () => {
    cy.visit('/login'); // Navegar al login
    cy.get('ion-input[placeholder="Usuario"]').type('testuser');
    cy.get('ion-input[placeholder="Contraseña"]').type('password');
    cy.get('ion-button').contains('Ingresar').click();
    cy.url().should('include', '/home'); // Verificar redirección
  });
});
