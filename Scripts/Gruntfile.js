module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-screeps');

    grunt.initConfig({
        screeps: {
            options: {
                email: 'w20191201l@qq.com',
                password: '1208aizy',
                branch: 'dev',
                ptr: false
            },
            dist: {
                src: ['dist/*.js']
            }
        }
    });
}