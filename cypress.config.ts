import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://easygenerator.com',
    specPattern: 'test/specs/**/*.spec.ts',
    supportFile: 'test/support/index.ts',
    video: true,
    videosFolder: 'test/videos',
    defaultCommandTimeout: 8000,
    setupNodeEvents(_on, config) {
      console.log(`CI: ${process.env.CI}`);
      console.log(`SPEC HASH: ${process.env.SPEC_HASH}`);
      return config;
    }
  }
});
