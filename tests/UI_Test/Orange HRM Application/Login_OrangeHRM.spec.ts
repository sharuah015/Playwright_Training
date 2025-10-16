import { test, expect } from '@playwright/test';

test('Verify login functionality with valid Credentials', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
  await page.getByPlaceholder('Username').fill('Admin');
  //await page.pause();
  await page.getByPlaceholder('Password').fill('admin123');
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();
});