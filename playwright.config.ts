// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    use: {
        headless: true, // Ensure headless mode is enabled
    },
});
