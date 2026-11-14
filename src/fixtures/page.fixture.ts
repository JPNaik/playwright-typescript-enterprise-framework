import{test as base} from "@playwright/test";
import { HomePage } from "@pages/home.page";
import { LoginPage } from "@pages/login.page";
import { SignupPage } from "@pages/signup.page";
import { ProductsPage } from "@pages/products.page";
import { CartPage } from "@pages/cart.page";
import { UserApiClient } from "@api/user.api";

type PageFixtures={
    homePage:HomePage;
    loginPage:LoginPage;
    signupPage:SignupPage;
    productsPage:ProductsPage;
    cartPage:CartPage;
    userApi:UserApiClient;
};

export const test=base.extend<PageFixtures>({
    homePage:async({page},use)=>{
        const homePage=new HomePage(page);
        await use(homePage);
    },
    loginPage:async({page},use)=>{
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    signupPage:async({page},use)=>{
        const signupPage = new SignupPage(page);
        await use(signupPage);
    },
    productsPage:async ({page},use)=>{
        const productsPage = new ProductsPage(page);
        await use(productsPage);
    },
    cartPage:async({page},use)=>{
        const cartPage = new CartPage(page);
        await use(cartPage);
    },
    userApi:async({request},use)=>{
        const userApi = new UserApiClient(request);
        await use(userApi);
    },
});

export {expect} from "@playwright/test";