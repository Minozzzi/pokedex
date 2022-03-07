module.exports = {
  displayName: 'pokedex',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/src/setup-test.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest'
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$'
  ],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy'
  },
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx'],
  modulePathIgnorePatterns: ['<rootDir>/node_modules'],
  resetMocks: true
}
