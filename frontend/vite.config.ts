import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000/", // Replace with your API URL
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, "/"), // Optional: Rewrite the path
      },
    },
  },
});
