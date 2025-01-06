import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GifExpertApp } from './home/GifExpertApp';

import './globals.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertApp />
  </StrictMode>,
)
