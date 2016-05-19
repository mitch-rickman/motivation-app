
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
        entry: "./src/js/main.js",
        src: "./src/js/**/*.js",
        build: "./build/js"
    }
}
