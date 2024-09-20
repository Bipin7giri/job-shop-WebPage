module.exports = {
  plugins: {
    "postcss-nesting": {}, // Plugin for CSS nesting
    "postcss-preset-env": {
      // Add this plugin for modern CSS features
      stage: 1, // Specify which CSS features you want to enable (1 is for most common)
    },
    tailwindcss: {},
    autoprefixer: {},
  },
};
