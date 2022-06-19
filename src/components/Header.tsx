import './Header.css';
import React, { FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ERouteType, routeTitleMap } from '../constants';
import { history } from '../history';

export const Header: FC = () => {
  const location = useLocation();

  const title = routeTitleMap[location.pathname as ERouteType];

  return (
    <header className="header-root">
      <section className="container">
        <BackButton />
        <h5 className="header-title float-right">{title}</h5>
      </section>
    </header>
  );
};

function BackButton() {
  const navigate = useNavigate();

  if (
    !navigate ||
    history.action.length === 0 ||
    location.pathname === ERouteType.MAIN
  ) {
    return null;
  }

  return (
    <button
      className="button-clear icon-button header-btn-back"
      onClick={() => navigate(-1)}
    >
      <span className="material-icons">arrow_back</span>
    </button>
  );
}
