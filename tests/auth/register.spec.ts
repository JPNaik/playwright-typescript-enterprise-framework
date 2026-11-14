import {test,expect} from "@fixtures/page.fixture";
import { DataFactory } from "@utils/data-factory";

test.describe("user registration flow",()=>{
    test("User can register new account and delete the account",async({homePage,loginPage,signupPage})=>{
        const newUser = DataFactory.generateUser();

        await homePage.open();
        await homePage.clickSignUpLogin();
        
        await expect(loginPage.signupHeader).toBeVisible();
        await loginPage.startSignup(newUser.name,newUser.email);

        await expect(signupPage.accountInfoHeader).toBeVisible();
        await signupPage.completeRegistration(newUser);

        await expect(signupPage.accountCreatedHeader).toHaveText('Account Created!');
        await signupPage.clickContinue();

        await expect(homePage.loggedInUserText).toContainText(`Logged in as ${newUser.name}`);

        await homePage.deleteAccountLink.click();
        await expect(signupPage.accountDeletedHeader).toHaveText('Account Deleted!');
        await signupPage.clickContinue();
    });
});