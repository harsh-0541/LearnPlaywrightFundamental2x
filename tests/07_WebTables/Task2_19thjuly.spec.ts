import { test, expect, Page, Locator } from '@playwright/test';


async function findRowByName(page: Page, name: string): Promise<Locator> {
    while (true) {
        const row = page.locator('#employees-tbody tr').filter({ hasText: name });
        if (await row.count())
            return row;
        const next = page.getByTestId('next-page');

        if (await next.isDisabled()) throw new Error(`Row not found: ${name}`);

        await next.click();
    }
}

test('Verify email in employess table with pagination', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/tables/webtable');
    let name: string = "Mia Hoffmann";
    const row = await findRowByName(page, name);
    const email = await row.locator('td[data-col="email"]').innerText();
    console.log(`Email of ${name}: ${email}`);
    await page.waitForTimeout(5000);

});