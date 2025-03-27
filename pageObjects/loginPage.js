import { BasePage } from "./basePage";

export class LoginPage extends BasePage {

    static get url(){
        return"profile.php#login";
    }

    static usernameField(){
        return cy.get("#txt-username");
    }

    static passwordField(){
        return cy.get("#txt-password");
    }

    static loginButton(){
        return cy.get("#btn-login");
    }
}