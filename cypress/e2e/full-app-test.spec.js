const PORT = Cypress.env('port');
const BASE_URL = `http://localhost:${PORT}`;
const AMOUNT_INPUT = '[name="amount"]';
const PHONE_INPUT = '[name="phone"]';

describe('Main page', () => {
  it('Check operators on main page', () => {
    cy.log('Make sure that you running local server on ' + PORT + ' port');
    cy.visit(BASE_URL);
    checkUrlAfterClicking('/operator/1');
    checkUrlAfterClicking('/operator/2');
    checkUrlAfterClicking('/operator/3');
  });

  it('Check functionality of back button', () => {
    cy.get('a[href="/"]').should('not.visible');
    cy.get(`[href="/operator/1"]`).click();
    cy.get('a[href="/"]').click();
    cy.url().should('eq', BASE_URL + '/');
  })
});

describe('Operator page', () => {
  it('Check phone mask', () => {
    cy.visit(BASE_URL);
    cy.get(`[href="/operator/1"]`).click();
    cy.get(PHONE_INPUT).focus().type('+./\';,cn.йууцкуkjdasdn', {delay: 200}).blur().should('have.value', '+7 (___) ___-__-__').clear();
  });
  it('Check required validation', () => {
    cy.get(AMOUNT_INPUT).focus();
    cy.get(PHONE_INPUT).should('have.class', 'ng-invalid');
    cy.get(PHONE_INPUT).parents('.mat-form-field').find('mat-error span').contains('Phone is required');
    checkDisableStateOfBtn();
  });
  it('Check operator code validation', () => {
    cy.get(PHONE_INPUT).type('123123123123123123');
    cy.get(PHONE_INPUT).parents('.mat-form-field').find('mat-error span').contains('Invalid operator code');
    checkDisableStateOfBtn();
    cy.get(PHONE_INPUT).clear({timeout: 1000}).type('9021231212', {delay: 1000}).blur();
    cy.wait(5000);
    cy.get(PHONE_INPUT).parents('.mat-form-field').find('mat-error').should('not.exist');
    cy.get(PHONE_INPUT).should('not.have.class', 'ng-invalid');
  });
  it('Check phone validation', () => {
    cy.get(PHONE_INPUT).clear().type('1{backspace}{selectall}{backspace}{backspace}9002902');
    cy.get('mat-error span').contains('Invalid phone');
    checkDisableStateOfBtn();
    cy.get(PHONE_INPUT).clear({timeout: 1000}).type('1{backspace}{selectall}{backspace}{backspace}9021231212', {delay: 100});
    cy.get(PHONE_INPUT).parents('.mat-form-field').find('mat-error span').should('not.exist');
    cy.get(PHONE_INPUT).should('not.have.class', 'ng-invalid');
  });

  it('Check amount validation', () => {
    cy.get(AMOUNT_INPUT).clear();
    cy.get(AMOUNT_INPUT).parents('.mat-form-field').find('mat-error span').contains('Amount is required');
    checkDisableStateOfBtn();
    cy.get(AMOUNT_INPUT).clear({timeout: 1000}).type('1001', {delay: 100});
    cy.get(AMOUNT_INPUT).parents('.mat-form-field').find('mat-error span').contains('Should be no more than 1000₽');
    checkDisableStateOfBtn();
    cy.get(AMOUNT_INPUT).clear();
    cy.get(AMOUNT_INPUT).parents('.mat-form-field').find('mat-error span').contains('Amount is required');
    checkDisableStateOfBtn();
    cy.get(AMOUNT_INPUT).clear().type('200');
    cy.get(AMOUNT_INPUT).parents('.mat-form-field').find('mat-error span').should('not.exist');
    cy.get(AMOUNT_INPUT).should('not.have.class', 'ng-invalid');
    cy.get('button[type="submit"]').should('not.be.disabled');
  });

  it('Check form submitting', () => {
    cy.get(AMOUNT_INPUT).focus().type('{enter}');
    cy.get('snack-bar-container').should('exist');
    cy.get('app-snackbar-info');
  })
});

describe('Not existed operator page', () => {
  it('Check redirect to main page', () => {
    cy.visit(BASE_URL+'/operator/4');
    cy.get('snack-bar-container')
      .should('exist')
      .contains('Оператор не найден');
  });
});


const checkUrlAfterClicking = (url) => {
  cy.get(`[href="${url}"]`).click();
  cy.url().should('eq', BASE_URL + url);
  cy.window().its('history').invoke('back')
};

const checkDisableStateOfBtn = () => {
  cy.get('button[type="submit"]').should('be.disabled');
};
