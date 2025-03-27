import { BasePage } from "./basePage";

export class AppointmentSummaryPage extends BasePage {

    static get url(){
        return"#appointment";
    }

    static facilityField(){
        return cy.get("#facility");
    }

    static applyForHospitalReadmissionField(){
        return cy.get("#hospital_readmission");
    }

    static healthcareProgramField(){
        return cy.get("#program");
    }

    static visitDateField(){
        return cy.get("#visit_date");
    }

    static commentField(){
        return cy.get("#comment");
    }

}