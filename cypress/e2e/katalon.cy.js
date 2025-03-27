import { AppointmentPage } from "../../pageObjects/appointmentPage";
import { AppointmentSummaryPage } from "../../pageObjects/appointmentSummaryPage";
import { BasePage } from "../../pageObjects/basePage"
import { HistoryPage } from "../../pageObjects/historyPage";
import { HomePage } from "../../pageObjects/homePage";
import { LoginPage } from "../../pageObjects/loginPage";

describe('MD2', () => {
  context("Appointment Tests", () => {
      beforeEach(() => {
        BasePage.visit();
        HomePage.makeAppointmentButton().click();
        LoginPage.usernameField().type("John Doe");
        LoginPage.passwordField().type("ThisIsNotAPassword");
        LoginPage.loginButton().click();
      })

      it('Make an Appointment', () => {
        AppointmentPage.facilityField().select("Seoul CURA Healthcare Center");
        AppointmentPage.applyForHospitalReadmissionField().check();
        AppointmentPage.healthcareProgramField().contains('Medicare').click();
        AppointmentPage.visitDateField().click();
        AppointmentPage.calendarField().contains('30').click();
        AppointmentPage.commentField().type('CURA Healthcare Service');
        AppointmentPage.bookAppointmentButton().click();

        AppointmentSummaryPage.facilityField().should("contain.text", "Seoul CURA Healthcare Center");
        AppointmentSummaryPage.applyForHospitalReadmissionField().should("contain.text", "Yes");
        AppointmentSummaryPage.healthcareProgramField().should("contain.text", "Medicare");
        const today = new Date();
        const currentMonthYear = `${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;
        AppointmentSummaryPage.visitDateField().should("contain.text", `30/${currentMonthYear}`);
        AppointmentSummaryPage.commentField().should("contain.text", "CURA Healthcare Service");

      })

      it('Appointment history empty', () => {
        AppointmentPage.menuButton().click();
        AppointmentPage.sidebar().should('have.class', 'active');
        AppointmentPage.sidebar().contains('History').click();

        HistoryPage.historyField().contains('No appointment').should('be.visible');
      })
  });
})