import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/chat": {
        target: "http://3.38.183.31:8000",
        changeOrigin: true,
      },
      "/api": {
        target: "http://3.38.183.31:3000",
        changeOrigin: true,
      },
      "/image": {
        target: "http://3.38.183.31:3000",
        changeOrigin: true,
      },
    },
  },
});
