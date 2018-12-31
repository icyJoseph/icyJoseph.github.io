import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Loadable from "react-loadable";

import AsyncBlog from "../containers/Blog";
import AsyncTopMenu from "../containers/TopMenu";

import AsyncLanding from "../containers/Landing";
import AsyncNoMatch from "../containers/NoMatch";

// import BodyLoader from "./components/Loading/BodyLoader";
// import HeaderLoader from "./components/Loading/HeaderLoader";
// import BottomLoader from "./components/Loading/BottomLoader";
// import ServiceWorkerMessage from "./components/ServiceWorkerMessage";

// export const AsyncLanding = Loadable({
//   loader: () =>
//     import(/*webpackChunkName: "AsyncLanding"*/ "./containers/Landing"),
//   loading: BodyLoader,
//   delay: 600
// });

// export const AsyncHacks = Loadable({
//   loader: () => import(/*webpackChunkName: "AsyncHacks"*/ "./containers/Hacks"),
//   loading: BodyLoader,
//   delay: 600
// });

// export const AsyncBlog = Loadable({
//   loader: () => import(/*webpackChunkName: "AsyncBlog"*/ "./containers/Blog"),
//   loading: BodyLoader,
//   delay: 600
// });

// export const AsyncNoMatch = Loadable({
//   loader: () =>
//     import(/*webpackChunkName: "AsyncNoMatch"*/ "./containers/NoMatch"),
//   loading: BodyLoader,
//   delay: 600
// });

// export const AsyncTopMenu = Loadable({
//   loader: () =>
//     import(/*webpackChunkName: "AsyncTopMenu"*/ "./containers/TopMenu"),
//   loading: HeaderLoader,
//   delay: 600
// });

// export const AsyncBottomMenu = Loadable({
//   loader: () =>
//     import(/*webpackChunkName: "AsyncBottomMenu"*/ "./containers/BottomMenu"),
//   loading: BottomLoader,
//   delay: 600
// });

export const Routes = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Fragment>
      <AsyncTopMenu />
      <Switch>
        <Route path="/blog" component={AsyncBlog} />
        <Route path="/" exact component={AsyncLanding} />
        <Route component={AsyncNoMatch} />
      </Switch>
      {/* <ServiceWorkerMessage /> */}
      {/* <AsyncBottomMenu /> */}
    </Fragment>
  </BrowserRouter>
);

export default Routes;