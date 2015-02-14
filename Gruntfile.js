'use strict';
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.initConfig({
        ngtemplates: {
            app: {
                src: 'src/template/**.html',
                dest: 'src/template.js',
                options: {
                    url: function (url) {
                        return url.replace('template/', '');
                    },
                    htmlmin: {collapseWhitespace: true, collapseBooleanAttributes: true},
                    module: 'ngPivot'
                }
            }
        },
        uglify: {
            app: {
                files: {
                    'dist/ngPivot.min.js': ['dist/ngPivot.js'
                    ]
                }
            }
        },
        cssmin: {
            app: {
                files: {
                    'dist/ngPivot.min.css': ['src/css/style.css' ]
                }
            }
        },
        copy: {
            main: {
                src: 'src/css/img/*',
                dest: 'dist/img/',
                expand: true,
                flatten: true,
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'src/ngPivot.js',
                    'src/ng-sortable.js'
                ],
                dest: 'dist/ngPivot.js'
            }
        },
        watch: {
            app: {
                files: ['src/**.js','src/css/**.css','template/**.html','demo/demoCtrl.js','src/pivot/**.js',],
                tasks: ['default'],
                options: {
                    livereload: true
                }
            }
        }

    });
    grunt.registerTask('default', [
        'ngtemplates:app','concat:dist','uglify:app', 'cssmin:app','copy:main','watch:app' ]);
    grunt.registerTask('min', [
        'ngtemplates:app','concat:dist','uglify:app', 'cssmin:app','copy:main' ]);
}