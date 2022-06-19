// https://stackoverflow.com/a/72154672

import React, { FC, PropsWithChildren, useLayoutEffect, useState } from 'react';
import { Action, Location } from 'history';
import { Router } from 'react-router-dom';
import { history } from '../history';

interface CustomRouterState {
  action: Action;
  location: Location;
}

export const CustomBrowserRouter: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  const [state, setState] = useState<CustomRouterState>({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
};
