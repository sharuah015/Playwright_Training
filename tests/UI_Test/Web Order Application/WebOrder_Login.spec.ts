import { test, expect } from '@playwright/test';

test('Verify login functionality with valid Credentials', async ({ page }) => {
  await page.goto('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx');
  await expect(page.getByRole('textbox', { name: 'Username:' })).toBeEmpty();
  await page.getByRole('textbox', { name: 'Username:' }).fill('Tester');
  await expect(page.getByRole('textbox', { name: 'Password:' })).toBeEmpty();
  await page.getByRole('textbox', { name: 'Password:' }).fill('test');
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'List of All Orders' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
  await page.getByRole('link', { name: 'Logout' }).click();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});