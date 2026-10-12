import { lazy, Suspense, type ReactNode } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

const Home = lazy(() => import("@/pages/Home"));
const Projects = lazy(() => import("@/pages/Projects"));
const MayaVE = lazy(() => import("@/pages/projects/MayaVE"));
const EcoRewardBin = lazy(() => import("@/pages/projects/EcoRewardBin"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const s = (el: ReactNode) => <Suspense fallback={<div className="min-h-[60vh]" aria-busy="true" />}>{el}</Suspense>;

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: s(<Home />) },
      { path: "/projects", element: s(<Projects />) },
      { path: "/projects/mayave", element: s(<MayaVE />) },
      { path: "/projects/ecoreward-bin", element: s(<EcoRewardBin />) },
      { path: "/about", element: s(<About />) },
      { path: "/contact", element: s(<Contact />) },
      { path: "*", element: s(<NotFound />) },
    ],
  },
]);
