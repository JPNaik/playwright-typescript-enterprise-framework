import {Page,Locator} from "@playwright/test";
import { BasePage } from "./base.page";
import { UserRegistrationData } from "@utils/data-factory";

export class SignupPage extends BasePage{
    readonly accountInfoHeader: Locator;
    readonly titleMrRadio: Locator;
    readonly titleMrsRadio: Locator;
    readonly passwordInput: Locator;
    readonly daysDropdown: Locator;
    readonly monthsDropdown: Locator;
    readonly yearsDropdown: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly companyInput: Locator;
    readonly address1Input: Locator;
    readonly countryDropdown: Locator;
    readonly stateInput: Locator;
    readonly cityInput: Locator;
    readonly zipcodeInput: Locator;
    readonly mobileNumberInput: Locator;
    readonly createAccountButton: Locator;
    readonly accountCreatedHeader: Locator;
    readonly continueButton: Locator;
    readonly accountDeletedHeader: Locator;

    constructor(page:Page){
        super(page);
        this.accountInfoHeader = page.getByRole('heading',{name: 'Enter Account Information'});
        this.titleMrRadio = page.locator('#id_gender1');
        this.titleMrsRadio = page.locator('#id_gender2');
        this.passwordInput = page.locator('input[data-qa="password"]');
        this.daysDropdown = page.locator('select[data-qa="days"]');
        this.monthsDropdown = page.locator('select[data-qa="months"]');
        this.yearsDropdown = page.locator('select[data-qa="years"]');
        this.firstNameInput = page.locator('input[data-qa="first_name"]');
        this.lastNameInput = page.locator('input[data-qa="last_name"]');
        this.companyInput = page.locator('input[data-qa="company"]');
        this.address1Input = page.locator('input[data-qa="address"]');
        this.countryDropdown = page.locator('select[data-qa="country"]');
        this.stateInput = page.locator('input[data-qa="state"]');
        this.cityInput = page.locator('input[data-qa="city"]');
        this.zipcodeInput = page.locator('input[data-qa="zipcode"]');
        this.mobileNumberInput = page.locator('input[data-qa="mobile_number"]');
        this.createAccountButton = page.locator('button[data-qa="create-account"]');
        this.accountCreatedHeader = page.locator('h2[data-qa="account-created"]');
        this.continueButton = page.locator('a[data-qa="continue-button"]');
        this.accountDeletedHeader = page.locator('h2[data-qa="account-deleted"]');
    }
    async completeRegistration(user: UserRegistrationData): Promise<void>{
        if(user.title==='Mr'){
            await this.titleMrRadio.check();
        }
        else{
            await this.titleMrsRadio.check();
        }
        await this.passwordInput.fill(user.password);
        await this.daysDropdown.selectOption(user.birthDay);
        await this.monthsDropdown.selectOption(user.birthMonth);
        await this.yearsDropdown.selectOption(user.birthYear);

        await this.firstNameInput.fill(user.firstName);
        await this.lastNameInput.fill(user.lastName);
        await this.companyInput.fill(user.company);
        await this.address1Input.fill(user.address1);
        await this.countryDropdown.selectOption(user.country);
        await this.stateInput.fill(user.state);
        await this.cityInput.fill(user.city);
        await this.zipcodeInput.fill(user.zipcode);
        await this.mobileNumberInput.fill(user.mobileNumber);

        await this.createAccountButton.click();
    }
    async clickContinue(): Promise<void> {
        await this.continueButton.click();
  } 

}