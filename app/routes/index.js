import React from "react";
import Page347 from "./Page347";
class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
export default {
  path: "/",
  component: App,
  indexRoute: { component: Page347 },
  childRoutes: [
    {
      path: "/2nd_magazine_2nd_trial",
      name: "/2nd_magazine_2nd_trial",
      component: Page347
    },
    {
      path: "*",
      name: "notfound",
      component: Page347
    }
  ]
};
