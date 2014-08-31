#Contributing to AngularJS

We'd love to see this project living with PR from contributors who trust in it. Here is some guidelines to keep the contributions useful and efficient.

## Development hints

### Requirements
- `node` & `npm`
- `bower`
- `gulp`

### Installation
- Checkout the repository
- Run `npm install`
- Run `bower install`

### Test running
This module uses the classic AngularJS stack with:

- Karma (test runner)
- Mocha (assertion framework)
- angular-mocks (AngularJS module for testing)

Run the test with the gulp task `gulp test`.

### Test developing
Checkout `./test/spec` directory to see how the test works. Every further test should be placed in this directory.


## Submitting a Pull Request
- Fork the [repository](https://github.com/angularifyjs/angular-closure/)
- Make your changes in a new git branch following the coding rules & conventions below.
- Run the `gulp test` and make sure all tests passed before submitting your pull request.
- Push and make the PR.


## Coding rules & conventions
- When making changes on the source file, please check that your changes are covered by the tests. If not, create a new test case.
- This module uses `jshint` as javascript code checker. Checkout `./.jshintrc` to see the configuration.


## Commit conventions
angular-closure uses the same strict conventions as AngularJS and UI-router. These conventions are explained [here](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines).

**If you have any suggestions to make this library better, feel free to create a ticket.**

**Enjoy!**