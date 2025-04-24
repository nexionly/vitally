
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ErrorBoundary from './components/ErrorBoundary.tsx'

// Add console logger to help debug in production
if (import.meta.env.PROD) {
  const originalConsoleError = console.error;
  console.error = (...args) => {
    originalConsoleError(...args);
    // Could send to an error tracking service here
  };
}

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
