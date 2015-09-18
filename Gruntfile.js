module.exports = function( grunt ) {
  grunt.initConfig({
    watch: {
      site: {
        files: [ '_site/**' ],
        options: { livereload: true },
      },
      jekyll: {
        files: [ 'jekyll_src/**' ],
        tasks: [ 'jekyll' ]
      }
    },
    connect: {
      server: {
        options: {
          open: true,
          livereload: true,
          base: '_site'
        }
      }
    },
    jekyll: {
      dist: {
        options: {
          config: '_config.yml'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-jekyll');

  grunt.registerTask('default', ['jekyll', 'connect:server', 'watch'] );
};