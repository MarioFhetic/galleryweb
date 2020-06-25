import React, { Suspense, lazy, Component } from "react";
import { Route, Switch } from "react-router-dom";

// import Home from "./components/Home/home";
import Layout from "./hoc/Layout/layout";
import Gallery from "./components/Gallery/gallery";
import GallerySlider from "./components/widgets/GallerySlider/GallerySlider";

import Principe from "./components/Pages/Principe/principe";
import Impression from "./components/Pages/Impression/impression";
import Finition from "./components/Pages/Finition/finition";
import Bio from "./components/Pages/Bio/bio";
import Contact from "./components/Pages/Contact/contact";
import Gallerie from "./components/Pages/Gallerie/gallerie";

class Routes extends Component {
  render() {
    const Home = lazy(() => import("./components/Home/home"));

    return (
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/bio" component={Bio} />
            <Route path="/principe" component={Principe} />
            <Route path="/impression" component={Impression} />
            <Route path="/finition" component={Finition} />
            <Route path="/galerie" component={Gallerie} />
            <Route path="/contact" component={Contact} />
            <Route path="/gallery/:name" component={Gallery} />
            <Route path="/foo" component={GallerySlider} />
          </Switch>
        </Suspense>
      </Layout>
    );
  }
}

export default Routes;
