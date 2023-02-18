import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Links from "./pages/links";
import QrCodes from "./pages/qrcodes";
import BioLink from "./pages/biolink";
import CustomLinks from "./pages/customlinks";
import Campaigns from "./pages/campaigns";
import Settings from "./pages/settings";
import Profile from "./pages/settings/personal/Profile";
import API from "./pages/settings/developer/api";
import Details from "./pages/settings/account/Details";
import CustomDomains from "./pages/settings/account/CustomDomains";
import Groups from "./pages/settings/account/Groups";
import CSVBulk from "./pages/settings/account/CSVBulk";
import Integrations from "./pages/settings/personal/Integrations";
import NavContainer from "./layouts/NavContainer";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import LinkContent from "./components/LinkContent";
// Create a client
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavContainer />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/links",
        element: <Links />,
        children: [{ path: "/links/:id", element: <LinkContent /> }],
      },
      {
        path: "/qrcodes",
        element: <QrCodes />,
      },
      {
        path: "/biolink",
        element: <BioLink />,
      },
      {
        path: "/customlinks",
        element: <CustomLinks />,
      },
      {
        path: "/campaigns",
        element: <Campaigns />,
      },
      {
        path: "/settings",
        element: <Settings />,
        children: [
          {
            path: "/settings/profile",
            element: <Profile />,
          },
          {
            path: "/settings/integrations",
            element: <Integrations />,
          },
          {
            path: "/settings/api",
            element: <API />,
          },
          {
            path: "/settings/organization/:org_id/details",
            element: <Details />,
          },
          {
            path: "/settings/organization/:org_id/custom-domain",
            element: <CustomDomains />,
          },
          {
            path: "/settings/organization/:org_id/groups",
            element: <Groups />,
          },
          {
            path: "/settings/organization/:org_id/bulk-upload",
            element: <CSVBulk />,
          },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
