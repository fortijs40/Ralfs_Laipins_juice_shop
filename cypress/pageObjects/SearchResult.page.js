import BasePage from "./Base.page";

class SearchResultPage extends BasePage{
    static get url(){
        return "/#/search?q=";
    }
    static get product(){
        return cy.get(".product");
    }
    static get itemName(){
        return cy.get("h1");
    }
    static get closeButton(){
        return cy.get(".close-dialog");
    }
    static get reviewsButton(){
        cy.wait(200);
        return cy.get('[aria-label="Expand for Reviews"]');
    }
    static get reviewText(){
        return cy.get(".review-text");
    }

}
export default SearchResultPage;