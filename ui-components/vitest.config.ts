import { defineConfig } from 'vitest/dist/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      include: ['**/src/**/*.{ts,tsx}'],
      exclude: ["**/src/**/*.stories.*", "**/src/**/*.d.ts"]
    },
    reporters :["default", "junit"],
    outputFile: 'junit.xml'
  }
})
