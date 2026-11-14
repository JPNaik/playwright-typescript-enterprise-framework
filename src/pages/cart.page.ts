import{Page,Locator} from "@playwright/test";
import {BasePage} from "@pages/base.page";

export class CartPage extends BasePage{
    readonly cartTableRows: Locator;
    readonly proceedToCheckoutButton: Locator;

    constructor(page:Page){
        super(page);
        this.cartTableRows = page.locator('#cart_info_table tbody tr');
        this.proceedToCheckoutButton = page.locator('a.check_out');
    }

    getCartItemName(rowIndex:number=0):Locator{
        return this.cartTableRows.nth(rowIndex).locator('.cart_description h4 a');
    }

    getCartItemQuantity(rowIndex: number = 0): Locator {
    return this.cartTableRows.nth(rowIndex).locator('.cart_quantity button');
  }
}