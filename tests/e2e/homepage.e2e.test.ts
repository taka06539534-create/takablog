import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should display the homepage with hero section', async ({ page }) => {
    await page.goto('/');

    // Check for hero section
    await expect(page.getByRole('heading', { name: /Hi, I'm/i })).toBeVisible();

    // Check for featured posts section
    await expect(page.getByText('Featured Posts')).toBeVisible();
  });

  test('should navigate to blog page', async ({ page }) => {
    await page.goto('/');

    // Click on Blog navigation link
    await page.getByRole('link', { name: 'Blog' }).click();

    // Wait for navigation and check URL
    await expect(page).toHaveURL('/blog');
  });

  test('should navigate to about page', async ({ page }) => {
    await page.goto('/');

    // Click on About navigation link
    await page.getByRole('link', { name: 'About' }).click();

    // Wait for navigation and check URL
    await expect(page).toHaveURL('/about');
  });
});
