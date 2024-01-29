import 'cypress-iframe'
describe('iFrame handling', () => {
    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/tinymce')
    })
    it("First Process using a variable",()=>{
        //using a variable
        const iframe = cy.get("#mce_0_ifr")
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap)
        iframe.clear().type("This is iframe handling {cmd+a}")

    })
    //Using custom commands
    it('Using Custom command', () => {
        cy.getIframe("#mce_0_ifr")
            .clear().type("This is iframe handling {cmd+a}")
        
    });
    //using iframe plugin
    it.only('using Iframe plugin', () => {
        cy.frameLoaded("#mce_0_ifr");
        cy.iframe("#mce_0_ifr").clear().type("This is using iframe plugin to handle iFrame");

    });
    
});