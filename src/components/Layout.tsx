import './Layout.css';
import React, { FC, PropsWithChildren } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main className="container layout-content">{children}</main>
      <Footer />
    </>
  );
};
