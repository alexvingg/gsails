/**
 * `uglify`
 *
 * ---------------------------------------------------------------
 *
 * Minify client-side JavaScript files using UglifyJS.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-uglify
 *
 */
module.exports = function(grunt) {

  grunt.config.set('uglify', {
    dist: {
      src: ['.tmp/public/concat/production.js'],
      dest: '.tmp/public/min/production.min.js'
    },
    script: {
      src: '.tmp/public/concat/script.js',
      dest: 'assets/js/script.min.js'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
};
