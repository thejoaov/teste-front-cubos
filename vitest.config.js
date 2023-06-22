import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    files: ['./src/**/*.test.tsx'],
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
    passWithNoTests: true,
    coverage: {
      reportsDirectory: './tests',
      reporter: ['lcov', 'json-summary', 'json', 'text', 'clover', 'cobertura'],
    },
  },
});
