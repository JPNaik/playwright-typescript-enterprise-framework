import{Page,Locator} from "@playwright/test";
import{BasePage} from "./base.page";

export class HomePage extends BasePage{
    readonly signUpLoginLink:Locator;
    readonly productsLink:Locator;
    readonly cartLink:Locator;
    readonly homeBanner: Locator;
    readonly loggedInUserText: Locator;
    readonly deleteAccountLink: Locator;

    constructor(page:Page){
        super(page);
        this.signUpLoginLink=page.getByRole('link',{name:' Signup / Login'});
        this.productsLink=page.getByRole('link',{name:' Products'});
        this.cartLink=page.getByRole('link',{name:' Cart'});
        this.homeBanner=page.locator('#slider-carousel');
        this.loggedInUserText=page.locator('li:has-text("Logged in as")');
        this.deleteAccountLink = page.getByRole('link', { name: ' Delete Account' });
    }

    async open():Promise<void>{
        await this.navigateTo('/');
    }
    async clickSignUpLogin():Promise<void>{
        await this.signUpLoginLink.click();
    }
    async clickProducts():Promise<void>{
        await this.productsLink.click();
    }
}