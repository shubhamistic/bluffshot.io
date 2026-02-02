import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GameProvider } from "@/providers/GameProvider";
import '@/styles/main.scss';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </StrictMode>
);