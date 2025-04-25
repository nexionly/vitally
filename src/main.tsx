
import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';

// Wait for DOM content to be fully loaded to avoid null reference errors
document.addEventListener('DOMContentLoaded', () => {
  // Add console logger to help debug in production
  if (import.meta.env.PROD) {
    const originalConsoleError = console.error;
    console.error = (...args) => {
      originalConsoleError(...args);
      // Could send to an error tracking service here
    };
  }

  const root = document.getElementById("root");
  if (!root) {
    console.error("Root element not found");
    document.body.innerHTML = '<div style="color: white; padding: 20px; text-align: center;">Unable to load application. Please try refreshing the page.</div>';
    return;
  }

  try {
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
});
