import React, { FC } from 'react';
import { LinkBlank } from './Link';

export const Footer: FC = () => {
  return (
    <footer className="footer-root">
      <section className="container">
        <p>
          developed by{' '}
          <LinkBlank
            url="https://www.linkedin.com/in/bernaporto"
            label="Bernardo Porto"
          />
        </p>
      </section>
    </footer>
  );
};
