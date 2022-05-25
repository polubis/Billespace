import { getGreeting } from '../support/app.po';

describe('billespace', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to Ui');
  });
});
