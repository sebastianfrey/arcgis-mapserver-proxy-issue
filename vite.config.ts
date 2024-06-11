import { defineConfig } from "vite";
// vite.config.js
export default defineConfig({
  server: {
    proxy: {
      "/Census": {
        target: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer", // Replace with your API server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/Census/, ""),
      },
    },
  },
});
