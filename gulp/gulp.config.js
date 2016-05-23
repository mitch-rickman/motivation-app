
module.exports = {
    css: {
        src: ["./src/scss/**/*.scss"],
        build: "./build/css/"
    },

    templates: {
        src: ["./src/templates/**/*.*"],
        build: "./build/"
    },

    js: {
        entry: ["./src/js/main.js", "./src/api/api-entry.js"],
        src: "./src/js/**/*.js",
        build: "./build/js"
    },

    api: {
        src: ['./src/api/api.js'],
        build: "./build"
    }
}
