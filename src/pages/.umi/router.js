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
    "path": "/customers/abb",
    "exact": true,
    "component": require('../customers/abb.js').default
  },
  {
    "path": "/customers/crrc",
    "exact": true,
    "component": require('../customers/crrc.js').default
  },
  {
    "path": "/customers/schneider",
    "exact": true,
    "component": require('../customers/schneider.js').default
  },
  {
    "path": "/Solutions",
    "exact": true,
    "component": require('../Solutions/index.jsx').default,
    "eslint no-undef": 0
  },
  {
    "path": "/Solutions/data.source",
    "exact": true,
    "component": require('../Solutions/data.source.js').default
  },
  {
    "path": "/Products",
    "exact": true,
    "component": require('../Products/index.jsx').default,
    "eslint no-undef": 0
  },
  {
    "path": "/Products/data.source",
    "exact": true,
    "component": require('../Products/data.source.js').default
  },
  {
    "path": "/Products/products.source",
    "exact": true,
    "component": require('../Products/products.source.js').default
  },
  {
    "path": "/Products/sap",
    "exact": true,
    "component": require('../Products/sap.jsx').default,
    "eslint no-undef": 0
  },
  {
    "path": "/Products/xtoms",
    "exact": true,
    "component": require('../Products/xtoms.js').default,
    "eslint no-undef": 0
  },
  {
    "path": "/Home",
    "exact": true,
    "component": require('../Home/index.jsx').default,
    "eslint no-undef": 0
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
    "path": "/History/data.source",
    "exact": true,
    "component": require('../History/data.source.js').default
  },
  {
    "path": "/AboutUs",
    "exact": true,
    "component": require('../AboutUs/index.jsx').default,
    "eslint no-undef": 0
  },
  {
    "path": "/AboutUs/data.source",
    "exact": true,
    "component": require('../AboutUs/data.source.js').default
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
