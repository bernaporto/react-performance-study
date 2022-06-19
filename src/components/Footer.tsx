import './Footer.css';
import React, { FC } from 'react';
import { LinkedinLink } from './Link';

export const Footer: FC = () => {
  return (
    <footer className="footer-root">
      <section className="container footer-disclaimer">
        <p>
          developed by <LinkedinLink />
        </p>
      </section>
    </footer>
  );
};
