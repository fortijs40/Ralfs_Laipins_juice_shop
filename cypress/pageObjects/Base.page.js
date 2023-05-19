class BasePage {

    static get url(){
        return "/";
    }
    static visit(){
        cy.visit(this.url);
    }
    static get dismissButton(){
        return cy.get(".close-dialog");
     }
     static get meWantButton(){
        return cy.get(".cc-dismiss");
     }
}
export default BasePage;