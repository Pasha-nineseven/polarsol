module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //SASS настройки
    sass: {
      options: {
        sourceMap: false,
        outputStyle: 'compact'
      },
      dist: {
        files: {
          'dist/css/style.css': 'src/scss/style.scss'
        }
      }
    },

    //autoPrefixer настройки
    autoprefixer:{
      options: {
        browsers: ['last 2 versions']
      },
      dist:{
        files:{
          'dist/css/style.css':'dist/css/style.css'
        }
      }
    },

    //WATCH настройки
    watch: {
      options: {
        spawn: false,
        livereload: true
      },

      styles: {
        files: [
          'src/scss/*.scss',
          'src/scss/components/*.scss',
          'src/scss/pages/*.scss',
        ],
        tasks: [
          'sass', 'autoprefixer'
        ]
      },
    },


  });
  
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  // grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['sass', 'watch', ]);
};