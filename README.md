# Spike
## Example Running Mocha Tests with Karma runner using Maven and Grunt

* Based on: [Client side testing with Mocha and Karma](https://sean.is/writing/client-side-testing-with-mocha-and-karma) 
    - [Source code](https://github.com/okcoker/client-side-testing)

* [Grunt Maven plugin](https://github.com/allegro/grunt-maven-plugin) 
    - Runs [Npm](https://www.npmjs.com) install (see package.json)
    - Runs Grunt default task (karma:dev)

* [Grunt](http://gruntjs.com)
    - Set up for Karma
    - Register Karma task

* [Karma](http://karma-runner.github.io)
    - Pre: Karma installed globally: `npm install -g karma`
    - Set up Mocha framework
    - Set up coverage report (Istanbul)

* [Mocha](http://mochajs.org) 
    - Using [Chai](http://chaijs.com) - assertion library
    - Using [Istanbul] (https://github.com/gotwarlost/istanbul) - code coverage tool
    - Using [Sinon.JS] (http://sinonjs.org) - test spies, stubs and mocks
