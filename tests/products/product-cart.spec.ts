import {test,expect} from "@fixtures/page.fixture";

test.describe('Products & cart E2E flow',()=>{
    test('user can search for a product and add to cart', async ({homePage,productsPage,cartPage})=>{
        const searchItem = 'Blue Top';

        await homePage.open();
        await homePage.clickProducts();
        await expect(productsPage.allProductsHeader).toBeVisible();

        await productsPage.searchProduct(searchItem);
        await expect(productsPage.searchedProductsHeader).toBeVisible();
        await expect(productsPage.productTitles.first()).toContainText(searchItem);

        await productsPage.addFirstProductToCartAndViewCart();

        await expect(cartPage.cartTableRows).toHaveCount(1);
        await expect(cartPage.getCartItemName(0)).toHaveText(searchItem);
        await expect(cartPage.getCartItemQuantity(0)).toHaveText('1');
    });
});