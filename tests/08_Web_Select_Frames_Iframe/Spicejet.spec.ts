import { test, expect } from '@playwright/test';

test('Verify From and To in spicejet', async ({ page }) => {

  await page.goto('https://www.spicejet.com/');
     
  // Select delhi from fropdown
    const fromField = page.getByTestId('to-testID-origin');
    await fromField.getByRole('textbox').click();
    await fromField.getByRole('textbox').fill('De');

    const delhiOption = page.locator('div').filter({ hasText: /^Delhi$/ }).first();
    await delhiOption.waitFor({ state: 'visible' });
    await delhiOption.click();
    await expect(fromField.getByRole('textbox')).toHaveValue('Delhi (DEL)');

    // Selct Bengaluru from To dropdown
    const toField = page.getByTestId('to-testID-destination');
    await toField.getByRole('textbox').click();
    await toField.getByRole('textbox').fill('Bang');

    const bengaluruOption = page.locator('div').filter({ hasText: /^Bengaluru$/ }).first();
    await bengaluruOption.waitFor({ state: 'visible' });
    await bengaluruOption.click();

   
    await expect(toField.getByRole('textbox')).toHaveValue('Bengaluru (BLR)');
});