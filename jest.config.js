/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const { resolve } = require('path');

module.exports = {
  preset: 'ts-jest',
  rootDir: './src',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.css$': resolve('./__mocks__/styleMock.js'),
  },
};
