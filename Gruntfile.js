/**
 * Created by Sherlock on 4/28/2016.
 */

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: 'client/lib/angular/angular.js',
                dest: 'dist/client/lib/angular.min.js'
            }
        },
        concat: {
            jsfiles: {
                src: [
                    'src/client/lib/jquery/jquery-1.12.3.min.js',
                    'src/client/lib/lodash/lodash.min.js',
                    'src/client/lib/angular/angular.min.js',
                    'src/client/lib/angular-animate/angular-animate.min.js',
                    'src/client/lib/angular-aria/angular-aria.min.js',
                    'src/client/lib/angular-messages/angular-messages.min.js',
                    'src/client/lib/angular-route/angular-route.min.js',
                    'src/client/lib/angular-sanitize/angular-sanitize.min.js',
                    'src/client/lib/angular-material/angular-material.min.js',
                    'src/client/lib/angular-material-calendar/angular-material-calendar.min.js',
                    'src/client/lib/angular-material-icons/angular-material-icons.min.js',
                    'src/client/lib/angular-translate/dist/angular-translate.min.js',
                    'src/client/lib/chart.js/Chart.min.js',
                    'src/client/lib/angular-chart.js/dist/angular-chart.min.js',
                    'src/client/lib/angular-typewrite/dist/angular-typewrite.js',
                    'src/client/lib/angular-simple-logger/dist/angular-simple-logger.min.js',
                    'src/client/lib/angular-google-maps/dist/angular-google-maps.min.js',
                    'src/client/lib/vegas/vegas.min.js',
                    'src/client/lib/SVG-Morpheus/compile/unminified/svg-morpheus.js'
                ],
                dest: 'dist/client/lib/weblibs.min.js'
            },
            cssfiles : {
                src: [
                    'src/client/lib/angular-material/angular-material.min.css',
                    'src/client/lib/angular-chart.js/dist/angular-chart.min.css',
                    'src/client/lib/angular-typewrite/dist/angular-typewrite.css',
                    'src/client/lib/vegas/vegas.min.css',
                    'src/client/lib/textanimation/normalize.css',
                    'src/client/lib/textanimation/linkstyles.css'
                ],
                dest: 'dist/client/lib/weblibs.min.css'
            }
        }
    });

    grunt.registerTask('compile', ['concat'] );

};