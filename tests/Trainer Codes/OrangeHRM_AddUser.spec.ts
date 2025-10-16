import { test, expect } from '@playwright/test';

test('Login to OrangeHRM', async ({ page }) => {

  // Go to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  // Click [placeholder="Username"]
  await page.fill('[placeholder="Username"]', 'Admin');
  await page.fill('[placeholder="Password"]', 'admin123');
  await page.click('button:has-text("Login")');
  await page.waitForURL('**/dashboard/index');
  await page.click('span:has-text("Admin")');
  await page.waitForURL('**/admin/viewSystemUsers');
  await page.click('text=Add');
  await page.waitForURL('**/admin/saveSystemUser');
  await page.click('text=User Role-- Select -- >> i');
  await page.click('div[role="option"]:has-text("Admin")');
  await page.click('text=Status-- Select -- >> i');
  await page.click('div[role="option"]:has-text("Enabled")');
  await page.fill('[placeholder="Type for hints..."]', 'A');
  await page.waitForSelector('div.oxd-autocomplete-option');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');

  // Generate a username without decimal point
  const ExpUserName = 'Abhi' + Math.floor(Math.random() * 10000);
  await page.locator('input').nth(2).fill(ExpUserName);

  // Fill password fields
  await page.locator('input[type="password"]').first().fill('Admin@123');
  await page.locator('input[type="password"]').nth(1).fill('Admin@123');

  await page.click('text=Save');
  await page.waitForSelector('.orangehrm-container');
  await expect(page.locator('.orangehrm-container')).toContainText(ExpUserName);

});