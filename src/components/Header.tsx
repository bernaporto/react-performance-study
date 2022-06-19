import './Header.css';
import React, { FC } from 'react';
import { useNavigate, useLocation, matchPath } from 'react-router-dom';
import { ERouteType, routeTitleMap } from '../constants';
import { history } from '../history';

export const Header: FC = () => {
  const route = useRoutePattern();
  const title = route ? routeTitleMap[route] : '';

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

function useRoutePattern(): ERouteType | null {
  const { pathname } = useLocation();

  return (
    (Object.values(ERouteType)
      .map((pattern) => matchPath(pattern, pathname))
      .map((match) => match?.pattern.path)
      .find(Boolean) as ERouteType) ?? null
  );
}
