import App from "./App";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import { createBrowserRouter } from "react-router";
import Details from "./pages/Details";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "favorites",
        Component: Favorite,
      },
      {
        path: ":id",
        Component: Details,
      },
    ],
  },
]);

export default routes;
