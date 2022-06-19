import './App.css';
import React, { FC } from 'react';

export const App: FC = () => {
  return (
    <section data-testid="app-root" className="app">
      <blockquote>Hello World!</blockquote>
    </section>
  );
};
