import { test, expect } from '@playwright/test';

test('find the country of the person', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/tables/webtable');
    let name: string = "Yoshi Tannamuri";
    let row = page.locator('#companies-table  tbody tr').filter({ hasText: name });
    const country = await row.locator('td[data-col="country"]').innerText();

    console.log(`Country of ${name} is ${country}`);
})