import BasePage from "./Base.page";

class HomePage extends BasePage{

    static get url(){
        return "/";
    }
    static get accountNavButton(){
       return cy.get("#navbarAccount");
    }
    static get loginButton (){
       return cy.get("#navbarLoginButton");
    }
    static get searchButton (){
        return cy.get("#searchQuery");
    }
    static get searchField (){
        return cy.get(".mat-form-field-type-mat-input")
    }
    static get itemsPerPageMenu(){
        return cy.get("mat-select[aria-label='Items per page:']")
    }
    static get itemPerPageSelect(){
        return cy.get(".mat-option-text");
    }
    static get itemAmount(){
        return cy.get(".mat-grid-tile-content");
    }
}
export default HomePage;