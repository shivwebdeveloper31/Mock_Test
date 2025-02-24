import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyOrder from "./Components/MyOrder.jsx";
import PerfectRank from "./Pages/PerfectRank.jsx";
import Home from "./Components/Home.jsx";
import { Provider } from "react-redux";
import { Store } from "./Store/Store.js";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/myOrder",
        element: <MyOrder />,
      },

      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/test",
    element: <PerfectRank />,
  },
]);
createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <RouterProvider router={appRouter} />
  </Provider>
);
