import React from 'react';
import { Route } from 'react-router-dom';

export default ({ routes }) => {
  let routeComponents = routes.map(({ path, component }, index) => (
    <Route
      key={`app-route-${index}-${path}`}
      path={path}
      component={component}
    />
  ));

  return <div>{routeComponents}</div>;
};
