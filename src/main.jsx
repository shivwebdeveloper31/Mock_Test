import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyOrder from "./Components/MyOrder.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/myOrder",
        element: <MyOrder />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
