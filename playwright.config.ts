/// <reference types="node" />

export default {
  // One config shared across this workspace tree.
  testDir: '.',
  testMatch: ['**/*.spec.ts'],
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on',
    headless: false,
    screenshot: 'on',
    video: 'on',
    viewport: { width: 1920, height: 1080 },
  },
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
      },
    },
  ],
};
