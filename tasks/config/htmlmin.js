module.exports = function (grunt) {

  grunt.config.set('htmlmin', {
    dist: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      expand: true,
      cwd: 'app/templates',
      src: ['**/*.html'],
      dest: 'assets/templates/',
      ext: '-min.html'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
};
