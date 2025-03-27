import { BasePage } from "./basePage";

export class HomePage extends BasePage {

    static get url(){
        return"";
    }

    static makeAppointmentButton(){
        return cy.get("#btn-make-appointment");
    }

}