import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/home.tsx";
import Login from "./pages/login.tsx";
import Productdetail from "./components/productdetail.tsx";
import Errorpage from "./pages/errorpage.tsx";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "products/:id",
        element: <Productdetail />,
      },
    ],
    errorElement: <Errorpage />,
  },
]);

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return <RouterProvider router={router} />;
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
