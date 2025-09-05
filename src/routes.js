import App from "./App";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import { createBrowserRouter } from "react-router";

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
        path: "favorite",
        Component: Favorite,
      },
    ],
  },
]);

export default routes;
