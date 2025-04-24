
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/vitally-expert/",
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'styles': ['./src/index.css']
        }
      }
    }
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    },
    devSourcemap: true
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      plugins: [['@emotion/babel-plugin', { sourceMap: true }]]
    }),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
