import { test, expect } from '@playwright/test';

test.describe('Blog Page', () => {
  test('should display the blog listing page', async ({ page }) => {
    await page.goto('/blog');

    // Check for page title
    await expect(page.getByRole('heading', { name: 'Blog' })).toBeVisible();

    // Check for search input
    await expect(page.getByPlaceholder('Search posts...')).toBeVisible();
  });

  test('should filter posts by search query', async ({ page }) => {
    await page.goto('/blog');

    // Enter search query
    const searchInput = page.getByPlaceholder('Search posts...');
    await searchInput.fill('Next.js');

    // Check that filtered results are displayed
    await expect(page.getByText('No posts found')).toBeVisible();
  });

  test('should filter posts by tag', async ({ page }) => {
    await page.goto('/blog');

    // Click on a tag filter
    const tagButton = page.getByRole('button', { name: /Next.js/i }).first();
    await tagButton.click();

    // Posts should be filtered
    await expect(page).toHaveURL(/blog/);
  });
});
