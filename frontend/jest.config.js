// NOT used at the moment
// We are using react-scripts test rather than jest directly with ts-scripts
// latest version of jest is not compatible with react-scripts. But if we want to start using
// custom config for react-scripts test: add '-- --config jest.config.js' to the script in package.json
// and remove the transform part from this file

module.exports = {

    collectCoverageFrom : [
        "src/**/*.ts",
        "src/**/*.tsx"
    ],
    moduleDirectories: [
        "node_modules",
        "src"
    ],
    // For importing
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    moduleNameMapper:{
        "\\.(css|scss)$":"<rootDir>/src/testTools/styleMock.js"
    },
    modulePaths:[
        "<rootDir>"
    ],

    // Root of source code
    // <rootDir> will be substituted by jest
    // DEFAULT is "<rootDir>/src"
    // roots: [
    //     "<rootDir>/src"
    // ],

    // snapshotSerializers: [
    //   "enzyme-to-json/serializer"
    // ],
    // react-script requires it to be in src/
    // setupFiles:[
    //     "<rootDir>/src/testTools/jestSetup.js"
    // ],
    // Test spec file resolution pattern
    // file should contain `test` or `spec`.
    // testRegex: "(.*|(\\.|/)(test|spec))\\.tsx?$",

    // Jest transformations -- this adds support for Typescript
    // using ts-jest ///OR NOT
    // transform: {
    //     "\\.(js|jsx|ts|tsx)$":  "ts-jest"
    // },
    transformIgnorePatterns: [
      "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
      "^.+\\.module\\.(css|sass|scss)$"
    ]

}