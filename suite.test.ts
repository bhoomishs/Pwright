// example.test.ts
import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
    // Navigate to the desired URL
    await page.goto('https://example.com');

    // Perform actions and assertions
    const title = await page.title();
    expect(title).toBe('Example Domain');
});
