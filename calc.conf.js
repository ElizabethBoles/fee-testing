//karma injecting mocha and chai js files into test runner html
module.exports = function karmaConfig(config){
  config.set({
    //property: and value in array
    frameworks: [ 'mocha', 'chai'],
    browsers: [ 'Chrome' ],
    singleRun: true,
    files: [
      'src/**/*.js',
      'test/specs/**/*.js'
    ]
  });
};
