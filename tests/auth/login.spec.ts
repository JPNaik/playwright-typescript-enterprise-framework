import{test,expect} from "@fixtures/page.fixture";
import authData from "@data/auth-data.json";
import { DataFactory } from "@utils/data-factory";

test.describe('Authentication tests',()=>{
    test('User can not log in with incorrect credentials',async ({homePage,loginPage})=>{
        
        await homePage.open();
        await expect(homePage.homeBanner).toBeVisible();
        
        await homePage.clickSignUpLogin();
        await expect(loginPage.loginHeader).toBeVisible();

        await loginPage.login(authData.invalidLogin.email,authData.invalidLogin.password);

        await expect(loginPage.loginErrorMessage).toHaveText(authData.invalidLogin.expectedError);
    });

    test('User can log in with valid credentials via API',async({homePage,loginPage,userApi})=>{
        const testUser = DataFactory.generateUser();
        await userApi.createUser(testUser);

        try{
            await homePage.open();
            await homePage.clickSignUpLogin();
            await loginPage.login(testUser.email,testUser.password);

            await expect(homePage.loggedInUserText).toContainText(`Logged in as ${testUser.name}`);
        }
        finally{
            await userApi.deleteUser(testUser.email,testUser.password);
        }
    });
});