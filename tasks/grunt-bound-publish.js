module.exports = function(grunt) {
  'use strict';

  grunt.registerMultiTask(
      'bound',
      'Publish Bound-compatible content as a static website.',
      function() {
    var options = this.options({
      configPath: './bound.json'
    });
    var bound = require('bound');
    var done = this.async();

    bound.update().then(function() {
      done();
    }, function(e) {
      grunt.log.writeln(e.message);
      done(false);
    });
  });
};
