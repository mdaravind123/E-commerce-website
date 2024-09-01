import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // Allow access to the entire project directory
      allow: [".."], // Adjust this if necessary, e.g., ['..', './node_modules']
    },
  },
});
