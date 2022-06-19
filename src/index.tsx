import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const element = document.createElement('main');
document.body.append(element);

const root = createRoot(element);
root.render(<App />);
