import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout/Layout";
import HomePage from "./Pages/HomePage";
import GameDetails from "./Pages/GameDetails";
import ErrorPage from "./Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:slug", element: <GameDetails /> },
    ],
  },
]);

export default router;
