import BasePage from "./Base.page";

class RegisterPage extends BasePage{
    static get url(){
        return "/#/register";
    }
    static get emailField(){
       return cy.get("#emailControl");
    }
    static get passwordField(){
        return cy.get("#passwordControl");
    }
    static get repeatPasswordField(){
        return cy.get("#repeatPasswordControl");
    }
    static get securityQuestionCombobox(){
        return cy.get('mat-select[role="combobox"]');
    }
    static get securityQuestionOption(){
        return cy.get(".mat-option-text");
    }
    static get securityQuestionAnswerField(){
        return cy.get("#securityAnswerControl");
    }
    static get registerButton(){
        return  cy.get("#registerButton");
    }

}
export default RegisterPage;