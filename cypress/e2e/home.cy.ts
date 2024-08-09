describe('Home e2e tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  context('Header', () => {
    it('desktop navigation links should lead to the right endpoint', () => {
      cy.get('.header--sections li').each(li => {
        cy.wrap(li)
          .find('a')
          .invoke('attr', 'href')
          .then(href => {
            cy.wrap(li).click();
            cy.url().should('include', href);
          });
      });
    });

    context('mobile', () => {
      beforeEach(() => {
        cy.viewport('iphone-6');
      });

      it('mobile navigation links should lead to the right endpoint', () => {
        cy.get('.header--mobile li').each(li => {
          cy.get('.header--menu-icon').click();
          cy.wrap(li)
            .find('a')
            .invoke('attr', 'href')
            .then(href => {
              cy.wrap(li).click();
              cy.url().should('include', href);
            });
        });
      });

      // Does this test actually belongs to e2e or it belongs more to unit test?
      it('click on icon should open mobile menu', () => {
        cy.get('.header--menu-icon').click();
        cy.get('.header--mobile li').should('be.visible');
      });
    });
  });

  context('Main', () => {
    it('main button should navigate to /tienda', () => {
      cy.contains('.styled--button', 'Explorar productos').click();
      cy.url().should('include', '/tienda');
    });

    it('');
  });

  context('Footer', () => {
    it('footer anchor should navigate to the right endpoint', () => {
      cy.get('.footer--about > .footer--links-list > :nth-child(1) > .footer--anchor').click();
      cy.url().should('include', '/nosotros#historia');
    });
  });
});
