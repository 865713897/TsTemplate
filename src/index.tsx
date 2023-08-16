import React from 'react';
import { createRoot } from 'react-dom/client';
import Router from './router';
import './global.scss';

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(<Router />);
}
