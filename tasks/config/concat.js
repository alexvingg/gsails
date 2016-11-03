/**
 * `concat`
 *
 * ---------------------------------------------------------------
 *
 * Concatenates the contents of multiple JavaScript and/or CSS files
 * into two new files, each located at `concat/production.js` and
 * `concat/production.css` respectively in `.tmp/public/concat`.
 *
 * This is used as an intermediate step to generate monolithic files
 * that can then be passed in to `uglify` and/or `cssmin` for minification.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-concat
 *
 */
module.exports = function(grunt) {

  grunt.config.set('concat', {
    js: {
      src: require('../pipeline').jsFilesToInject,
      dest: '.tmp/public/concat/production.js'
    },
    css: {
      src: require('../pipeline').cssFilesToInject,
      dest: '.tmp/public/concat/production.css'
    },
    script: {
      src: ['app/scripts/**/*.js'],
      dest: '.tmp/public/concat/script.js'
    },
    vendorjs: {
      src: [
        'bower_components/angular/angular.min.js',
        'bower_components/angular-route/angular-resource.min.js',
        'bower_components/angular-animate/angular-animate.min.js',
        'bower_components/angular-aria/angular-aria.min.js',
        'bower_components/angular-material/angular-material.min.js',
        'bower_components/angular-ui-router/release/angular-ui-router.min.js',
        'bower_components/angular-resource/angular-resource.min.js',
        'bower_components/angular-material-data-table/dist/md-data-table.min.js',
        ],
      dest: 'assets/js/vendor.min.js'
    }, 
    vendorcss: {
      src: [
        'bower_components/angular-material/angular-material.min.css',
        'bower_components/angular-material-data-table/dist/md-data-table.min.css'
        ],
      dest: 'assets/styles/vendor.min.css'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
};
