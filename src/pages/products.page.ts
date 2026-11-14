import {Page,Locator} from "@playwright/test";
import { BasePage } from "./base.page";

export class ProductsPage extends BasePage{
    readonly allProductsHeader: Locator;
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly searchedProductsHeader: Locator;
    readonly productCards: Locator;
    readonly productTitles: Locator;
    readonly continueShoppingButton: Locator;
    readonly viewCartModalLink: Locator;

    constructor(page:Page){
        super(page);
        this.allProductsHeader = page.getByRole('heading', { name: 'All Products' });
        this.searchInput = page.locator('#search_product');
        this.searchButton = page.locator('#submit_search');
        this.searchedProductsHeader = page.getByRole('heading', { name: 'Searched Products' });
        this.productCards = page.locator('.features_items .product-image-wrapper');
        this.productTitles = page.locator('.features_items .productinfo p');
        this.continueShoppingButton = page.getByRole('button', { name: 'Continue Shopping' });
        this.viewCartModalLink = page.locator('#cartModal a[href="/view_cart"]');
    }

    async searchProduct(productName:string):Promise<void>{
        await this.searchInput.fill(productName);
        await this.searchButton.click();
    }

    async addFirstProductToCartAndViewCart():Promise<void>{
        const firstProduct=this.productCards.first();
        await firstProduct.hover();
        await firstProduct.locator('.productinfo a.add-to-cart').click();
        await this.viewCartModalLink.click();
    }
}