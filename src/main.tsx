
import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';

const initializeApp = () => {
  console.log('Initializing application...');
  
  // Get base path from the script in index.html
  const basePath = (window as any).BASE_PATH || '/';
  console.log('Using base path:', basePath);
  
  // Enhanced error handling for chunk loading
  window.addEventListener('error', (event) => {
    console.error('Error occurred:', event);
    if (event.message && event.message.includes('loading chunk') || 
        (event.error && event.error.message && event.error.message.includes('loading chunk'))) {
      console.log('Chunk loading error detected, attempting recovery...');
      window.location.reload();
    }
  });

  const root = document.getElementById("root");
  if (!root) {
    console.error("Root element not found");
    document.body.innerHTML = '<div style="color: white; padding: 20px; text-align: center;">Unable to load application. Please try refreshing the page.</div>';
    return;
  }

  try {
    console.log('Mounting React app with base path:', basePath);
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
