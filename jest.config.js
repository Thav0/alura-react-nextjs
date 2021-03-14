module.exports = {
  testEnviroment: 'jsDom',
  testPathIgnorePatterns: ['/node_modules', '/.next'],
  collectCoverage: true, // teste de cobertura
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
};
