module.exports = {
    // mode: "jit",
    content: [
        "./components/**/*.vue",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.ts",
        "./nuxt.config.ts",
        "node_modules/tailvue/dist/tailvue.umd.js",
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
