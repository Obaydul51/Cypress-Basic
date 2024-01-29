describe('Basic Commands', () => {
    it.skip('Find Command', () => {
        cy.get("product").find("selector").contains("productName").eq(1).click()
    });
    it("invoke  function",()=>{
        cy.get("selector").invoke('text').then((value)=>{
            cy.log(value);
        })
    })
    it("each Command",()=>{
        cy.get("selector").find("selector").each((el,index,list)=>{
            cy.wrap(el.text().contains('value')).click()
        })
    })
    //invoke command
    const fn = (a,b,c)=>{
        return a+b+c;
    }
    it.only('invoke function', () => {
        cy.wrap({sum:fn})
            .invoke("sum",2,4,5)
            .should("be.gt",5)
            .and('be.lt',20)
    });
    //To access a jquery command we need to wrap the value
    it('Wrap command', () => {
        cy.get("form").then(($form)=>{
            cy.wrap($form).should('eq',"jane lane")
        })
    });
});