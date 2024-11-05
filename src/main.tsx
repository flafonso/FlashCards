import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./app/App.tsx";
import { HomePage, LoginPage, ProfilePage, DiscoverPage } from "./pages";

import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "discover",
        element: <DiscoverPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
