import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";

import { Container } from "../components/Container";
import GlobalStyle from "../theme/globalStyle";

// import ServiceWorkerMessage from "./components/ServiceWorkerMessage";

const Spinner = () => null;
const delay = 600;

export const AsyncLanding = Loadable({
  loader: () =>
    import(/*webpackChunkName: "AsyncLanding"*/ "../containers/Landing"),
  loading: Spinner,
  delay
});

export const AsyncHacks = Loadable({
  loader: () =>
    import(/*webpackChunkName: "AsyncHacks"*/ "../containers/Hacks"),
  loading: Spinner,
  delay
});

export const AsyncBlog = Loadable({
  loader: () => import(/*webpackChunkName: "AsyncBlog"*/ "../containers/Blog"),
  loading: Spinner,
  delay
});

export const AsyncNoMatch = Loadable({
  loader: () =>
    import(/*webpackChunkName: "AsyncNoMatch"*/ "../containers/NoMatch"),
  loading: Spinner
});

export const AsyncTopMenu = Loadable({
  loader: () =>
    import(/*webpackChunkName: "AsyncTopMenu"*/ "../containers/TopMenu"),
  loading: Spinner,
  delay
});

export const Routes = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Fragment>
      <GlobalStyle />
      <Route path="/:activeItem?" component={AsyncTopMenu} />
      <Container>
        <Switch>
          <Route path="/hacks" exact component={AsyncHacks} />
          <Route path="/blog" exact component={AsyncBlog} />
          <Route path="/" exact component={AsyncLanding} />
          <Route component={AsyncNoMatch} />
        </Switch>
      </Container>
      {/* <ServiceWorkerMessage /> */}
    </Fragment>
  </BrowserRouter>
);

export default Routes;
