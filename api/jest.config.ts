export default {
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "__tests__/coverage",
  coverageProvider: "v8",
  preset: "ts-jest",
  testMatch: [
    "**/*.spec.ts"
  ],
};
