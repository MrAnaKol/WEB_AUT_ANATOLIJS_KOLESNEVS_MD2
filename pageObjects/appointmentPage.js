import { BasePage } from "./basePage";

export class AppointmentPage extends BasePage {

    static get url(){
        return"#appointment";
    }

    static facilityField(){
        return cy.get("#combo_facility");
    }

    static applyForHospitalReadmissionField(){
        return cy.get("#chk_hospotal_readmission");
    }

    static healthcareProgramField(){
        return cy.get(".radio-inline");
    }

    static visitDateField(){
        return cy.get("#txt_visit_date");
    }

    static calendarField(){
        return cy.get(".datepicker-days");
    }

    static commentField(){
        return cy.get("#txt_comment");
    }

    static bookAppointmentButton(){
        return cy.get("#btn-book-appointment");
    }

    static menuButton(){
        return cy.get(".fa-bars");
    }

    static sidebar(){
        return cy.get("#sidebar-wrapper");
    }
}