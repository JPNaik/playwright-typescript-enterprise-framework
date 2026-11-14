import{Page,Locator} from "@playwright/test";
import{BasePage} from "./base.page";

export class LoginPage extends BasePage{
    readonly loginHeader: Locator;
    readonly loginEmailInput: Locator;
    readonly loginPasswordInput: Locator;
    readonly loginButton: Locator;
    readonly loginErrorMessage: Locator;
    readonly signupHeader: Locator;
    readonly signupNameInput: Locator;
    readonly signupEmailInput: Locator;
    readonly signupButton: Locator;

    constructor(page:Page){
        super(page);
        this.loginHeader = page.getByRole('heading', { name: 'Login to your account' });
        this.loginEmailInput = page.locator('input[data-qa="login-email"]');
        this.loginPasswordInput = page.locator('input[data-qa="login-password"]');
        this.loginButton = page.locator('button[data-qa="login-button"]');
        this.loginErrorMessage = page.locator('form[action="/login"] p');
        this.signupHeader = page.getByRole('heading', { name: 'New User Signup!' });
        this.signupNameInput = page.locator('input[data-qa="signup-name"]');
        this.signupEmailInput = page.locator('input[data-qa="signup-email"]');
        this.signupButton = page.locator('button[data-qa="signup-button"]');
    }
    async login(email:string,password:string):Promise<void>{
        await this.loginEmailInput.fill(email);
        await this.loginPasswordInput.fill(password);
        await this.loginButton.click();
    }
    async startSignup(name: string, email: string): Promise<void> {
        await this.signupNameInput.fill(name);
        await this.signupEmailInput.fill(email);
        await this.signupButton.click();
  }
}