module.exports = function(grunt) {
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['public/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },

    jshint: {
      files: ['Gruntfile.js', 'public/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },

    watch: {
      livereload: {
        files: ['views/**/*', 'routes/**/*', 'public/**/*'],
        options: {
          livereload: true
        }
      }
    },

    express: {
      options: {
        port: 3000
      },
      dev: {
        options: {
          script: 'app.js'
        }
      }
    },

    open: {
      server: {
        path: 'http://localhost:<%= express.options.port %>'
      }
    }
  });
 
  grunt.registerTask('default', ['express:dev', 'open', 'watch']);
};
