import { test, expect } from '@playwright/test';

test('Verify login functionality with valid Credentials', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  //await page.pause();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  await page.getByRole('button', { name: 'Login' }).click();
  //Dashboard Page
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  //Admin 
  
  await page.getByRole('link', { name: 'Admin' }).click();
  //await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
  await expect(page.getByText('AdminUser Management')).toBeVisible();
  await page.getByRole('button', { name: ' Add' }).click();
  await expect(page.getByRole('heading', { name: 'Add User' })).toBeVisible();

  //await page.getByText('-- Select --').first().click();
  await page.getByText('-- Select --').first().click();
  await page.getByRole('option', { name: 'Admin' }).click();
  await page.getByText('-- Select --').click();
  await page.getByRole('option', { name: 'Enabled' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('A');
  await page.waitForTimeout(3000);
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  // await page.getByRole('option', { name: 'Ranga Akunuri' }).click();

  const d = new Date();
  let ms = d.getMilliseconds();
 
  const ExpUserName = 'Anil' + ms;

  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill(ExpUserName);

  await page.getByRole('textbox').nth(4).click();
  await page.getByRole('textbox').nth(4).fill('admin6564');
  await page.getByRole('textbox').nth(4).press('ControlOrMeta+a');
  await page.getByRole('textbox').nth(4).fill('');
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('admin77725');
  await page.getByRole('textbox').nth(4).click();
  await page.getByRole('textbox').nth(4).fill('admin77725');
  await page.getByRole('button', { name: 'Save' }).click();
  //await page.waitForTimeout(10000);
  await page.waitForSelector(".orangehrm-container")
  await expect(page.locator(".orangehrm-container")).toContainText(ExpUserName)
  //await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
  //await expect(page.locator("//td[text()='"+ExpUserName+"']")).toHaveText(ExpUserName);
  //await expect(page.locator(`text=${ExpUserName}`)).toHaveText(ExpUserName);

  //Logout
  await page.locator('//span[@class="oxd-userdropdown-tab"]').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();

  //Verigy Logout is successfull
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          