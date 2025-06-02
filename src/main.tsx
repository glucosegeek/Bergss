import { StrictMode, lazy, Suspense, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Lazy load components
const App = lazy(() => import('./App'));

const LoadingWrapper = () => {
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const [hasRefreshed, setHasRefreshed] = useState(() => {
    return sessionStorage.getItem('hasRefreshed') === 'true';
  });

  useEffect(() => {
    if (!hasRefreshed) {
      // Set the flag in sessionStorage
      sessionStorage.setItem('hasRefreshed', 'true');
      // Trigger refresh after a short delay
      const timer = setTimeout(() => {
        setShouldRefresh(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [hasRefreshed]);

  useEffect(() => {
    if (shouldRefresh) {
      window.location.reload();
    }
  }, [shouldRefresh]);

  return (
    <Suspense fallback={
      <div className="min-h-screen bg-indigo-950 flex items-center justify-center">
        <div className="text-white text-xl animate-pulse">Ładowanie...</div>
      </div>
    }>
      <App />
    </Suspense>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoadingWrapper />
  </StrictMode>
);