
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  // Detect if we're on GitHub Pages
  const isGitHubPages = process.env.GITHUB_PAGES === 'true';
  const repoName = 'vitally-expert'; // The name of your GitHub repository
  
  return {
    base: isGitHubPages ? `/${repoName}/` : "./", // Use proper base path for GitHub Pages
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      emptyOutDir: true,
      sourcemap: mode !== 'production',
      minify: mode === 'production',
      chunkSizeWarningLimit: 1000,
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
      react(),
      mode === 'development' && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
