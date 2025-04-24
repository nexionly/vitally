
import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';

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
  throw new Error("Root element not found");
}

createRoot(root).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
