module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            my_target: {
                files: {
                    "src/ng-quill.min.js": "src/ng-quill.min.js"
                }
            }
        },
        umd: {
            all: {
                options: {
                    src: 'src/ng-quill.js',
                    dest: 'src/ng-quill.min.js', // optional, if missing the src will be used
                    deps: { // optional, `default` is used as a fallback for rest!
                        'default': ['quill', 'angular'],
                        amd: ['quill', 'angular'],
                        cjs: ['quill', 'angular']
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-umd');

    grunt.registerTask('default', ['umd', 'uglify']);
};
