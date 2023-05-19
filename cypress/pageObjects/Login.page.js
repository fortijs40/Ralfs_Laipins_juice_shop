import BasePage from "./Base.page";

class LoginPage extends BasePage{
    static get url(){
        return "/#/login";
    }
    static get nonYetCustomerLink(){
        return cy.get("#newCustomerLink");
    }
    static get registerMessage(){
        return cy.get(".mat-simple-snack-bar-content")
        .should("have.text", "Registration completed successfully. You can now log in.");
    }
    static get emailField(){
        return cy.get("#email");
    }
    static get passwordField(){
        return cy.get("#password");
    }
    static get loginButton(){
        return cy.get("#loginButton");
    }
    static logInto(email,password){
        this.emailField.type(email);
        this.passwordField.type(password);
        this.loginButton.click();
    }
}
export default LoginPage;