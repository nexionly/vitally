
import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';

// Enhanced initialization function to handle GitHub Pages paths
const initializeApp = () => {
  console.log('Initializing application...');
  console.log('Window location:', window.location.href);
  
  // Get base URL from the base tag
  const baseElement = document.querySelector('base');
  const basePath = baseElement ? baseElement.getAttribute('href') : '';
  console.log('Base path from DOM:', basePath);
  
  // Check if we're on GitHub Pages
  const isGitHubPages = window.location.hostname.includes('github.io');
  console.log('Is GitHub Pages:', isGitHubPages);
  
  // Setup error tracking for production
  if (import.meta.env.PROD) {
    const originalConsoleError = console.error;
    console.error = (...args) => {
      originalConsoleError(...args);
      // Add error tracking here if needed
    };
  }

  const root = document.getElementById("root");
  if (!root) {
    console.error("Root element not found");
    document.body.innerHTML = '<div style="color: white; padding: 20px; text-align: center;">Unable to load application. Please try refreshing the page.</div>';
    return;
  }

  try {
    console.log('Mounting React app...');
    createRoot(root).render(
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    );
    console.log("App successfully rendered");
  } catch (error) {
    console.error("Failed to render App:", error);
    root.innerHTML = '<div style="color: white; padding: 20px; text-align: center;">Failed to load application. Please try refreshing the page.</div>';
  }
};

// Ensure DOM is fully loaded before initializing
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

// Add global error handler for chunk loading errors
window.addEventListener('error', (event) => {
  if (event.message && event.message.includes('loading chunk') || 
      (event.error && event.error.message && event.error.message.includes('loading chunk'))) {
    console.error('Chunk loading error detected. This may be due to a network issue or outdated cache.');
    console.log('Attempting to reload the page...');
    window.location.reload();
  }
});
