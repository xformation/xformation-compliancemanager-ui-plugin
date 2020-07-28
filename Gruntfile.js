const sass = require('node-sass');

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'src/css/compliancemanager.dark.css': 'src/sass/compliancemanager.dark.scss',
                    'src/css/compliancemanager.light.css': 'src/sass/compliancemanager.light.scss',
                }
            }
        }
    });

    grunt.registerTask('default', ['sass']);
};
