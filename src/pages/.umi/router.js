import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = DefaultRouter;

let routes = [
  {
    "path": "/",
    "exact": true,
    "component": require('../index.js').default
  },
  {
    "path": "/data.source.common",
    "exact": true,
    "component": require('../data.source.common.js').default
  },
  {
    "path": "/Home",
    "exact": true,
    "component": require('../Home/index.jsx').default,
    "eslint no-undef": 0
  },
  {
    "path": "/Home/Banner0",
    "exact": true,
    "component": require('../Home/Banner0.jsx').default
  },
  {
    "path": "/Home/Content0",
    "exact": true,
    "component": require('../Home/Content0.jsx').default
  },
  {
    "path": "/Home/Content1",
    "exact": true,
    "component": require('../Home/Content1.jsx').default
  },
  {
    "path": "/Home/Content12",
    "exact": true,
    "component": require('../Home/Content12.jsx').default
  },
  {
    "path": "/Home/Content2",
    "exact": true,
    "component": require('../Home/Content2.jsx').default
  },
  {
    "path": "/Home/Content5",
    "exact": true,
    "component": require('../Home/Content5.jsx').default
  },
  {
    "path": "/Home/Footer0",
    "exact": true,
    "component": require('../Home/Footer0.jsx').default
  },
  {
    "path": "/Home/Nav0",
    "exact": true,
    "component": require('../Home/Nav0.jsx').default
  },
  {
    "path": "/Home/data.source",
    "exact": true,
    "component": require('../Home/data.source.js').default
  },
  {
    "path": "/History",
    "exact": true,
    "component": require('../History/index.jsx').default,
    "eslint no-undef": 0
  },
  {
    "path": "/History/Content9",
    "exact": true,
    "component": require('../History/Content9.jsx').default
  },
  {
    "path": "/History/Footer0",
    "exact": true,
    "component": require('../History/Footer0.jsx').default
  },
  {
    "path": "/History/Nav0",
    "exact": true,
    "component": require('../History/Nav0.jsx').default
  },
  {
    "path": "/History/data.source",
    "exact": true,
    "component": require('../History/data.source.js').default
  },
  {
    "component": () => React.createElement(require('/usr/local/lib/node_modules/umi/node_modules/_umi-build-dev@1.7.0@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false })
  }
];
window.g_routes = routes;
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  window.g_plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
window.g_history.listen(routeChangeHandler);
routeChangeHandler(window.g_history.location);

export default function RouterWrapper() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
