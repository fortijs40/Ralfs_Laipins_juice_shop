import HomePage from "../pageObjects/Home.page";
import LoginPage from "../pageObjects/Login.page";
import RegisterPage from "../pageObjects/Register.page";
import SearchResultPage from "../pageObjects/SearchResult.page";
describe('Juice-shop scenarios', () => {
  context("With no login", () => {
    beforeEach(() => {
      HomePage.visit();
      // click on dismiss button
      HomePage.dismissButton.click();
      // click on me want it button
      HomePage.meWantButton.click();
    });

    it("Registration", () =>{
      // Click account
      HomePage.accountNavButton.click();
      // Click login
      HomePage.loginButton.click();
      // Click not yet customer
      LoginPage.nonYetCustomerLink.click();
      // input email, generate random email
      RegisterPage.emailField.type(Math.floor(Math.random() * 100000) + "@test"+Math.floor(Math.random() * 1000)+".com");
      // input password
      RegisterPage.passwordField.type("qwerty");
      // repeat password
      RegisterPage.repeatPasswordField.type("qwerty");
      // select security question
      //cy.get("#mat-option-2").click();
      //cy.get("#mat-option-3").click();
      RegisterPage.securityQuestionCombobox.click();
      RegisterPage.securityQuestionOption.contains("Your favorite book?").click();
      // input security question answer
      RegisterPage.securityQuestionAnswerField.type("harry potter");
      // Click register
      RegisterPage.registerButton.click();
      // validate message
      LoginPage.registerMessage
      .should("have.text", "Registration completed successfully. You can now log in.");
    });
  });
  context("With login", () => {
    beforeEach(() => {
      LoginPage.visit();
      LoginPage.dismissButton.click();
      LoginPage.meWantButton.click();
      LoginPage.logInto("demo","demo");
    });
    it("Search for lemon scenario", () =>{
      // click on search icon
      HomePage.searchButton.click();
      //type in the value lemon and press enter
      HomePage.searchField.type("lemon{enter}");
      // Open lemon juice item
      SearchResultPage.product.contains("Lemon Juice").click();
      //validate that the item title is "Lemon juice (500ml)"
      SearchResultPage.itemName.should("have.text","Lemon Juice (500ml)");
    });
    it("Search 500ml", () =>{
      //Click on search icon
      HomePage.searchButton.click();
      // Type in the value 500 ml+ enter key
      HomePage.searchField.type("500ml{enter}");
      // Open eggfruit Juice (500ml)
      SearchResultPage.product.contains("Eggfruit Juice").click();
      //validate title for eggfruit juice
      SearchResultPage.itemName.should("have.text","Eggfruit Juice (500ml)");
      SearchResultPage.closeButton.click();
      // Open Lemon Juice (500ml)
      SearchResultPage.product.contains("Lemon Juice").click();
      //validate title for Lemon juice
      SearchResultPage.itemName.should("have.text","Lemon Juice (500ml)");
      SearchResultPage.closeButton.click();
      // Open Strawberry Juice (500ml)
      SearchResultPage.product.contains("Strawberry Juice").click();
      //validate title for Strawberry juice
      SearchResultPage.itemName.should("have.text","Strawberry Juice (500ml)");
      SearchResultPage.closeButton.click();
    });
    it(" Change item amount per page", () =>{
      // select 12
      HomePage.itemsPerPageMenu.click();
      HomePage.itemPerPageSelect.contains(12).click();
      //validate that we see 12 items
      HomePage.itemAmount.should("have.length",12);
      //select 24
      HomePage.itemsPerPageMenu.click();
      HomePage.itemPerPageSelect.contains(24).click();
      //validate that we see 24 items
      HomePage.itemAmount.should("have.length",24);
      //select 36
      HomePage.itemsPerPageMenu.click();
      HomePage.itemPerPageSelect.contains(36).click();
      //validate that we see 35 items
      HomePage.itemAmount.should("have.length",35);
    });
    it.only("Validate item review", () =>{
      // Click on search icon
      HomePage.searchButton.click();
      //Type in thevalue king + enter key
      HomePage.searchField.type("king{enter}");
      //Open King of the Hill
      SearchResultPage.product.contains("King of the Hill").click();
      // Click on the reviews
      SearchResultPage.reviewsButton.click();

      // Validate that we see - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
      SearchResultPage.reviewText.should("contain.text","K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");

    });
  });

});