import { test, expect } from '@playwright/test';

test('Xpath testing Cura healthcare Service', async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/")
    const makeAppoinment = page.locator("#btn-make-appointment");
    const usernameInput = page.locator("//input[@id='txt-username']");
    const passwordInput = page.locator("//input[@id='txt-password']");
    const loginButton = page.locator("//button[@id='btn-login']")

    await makeAppoinment.click();
    await usernameInput.fill('John Doe');
    await passwordInput.fill('ThisIsNotAPassword');
    await loginButton.click();

    //verify successful navigation to the appointment page
    await expect(page).toHaveURL(/appointment/);
});



