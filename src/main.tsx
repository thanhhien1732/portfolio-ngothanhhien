import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'styles/global.scss';
import Layout from '@/layout';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from 'pages/home';
import ProjectPage from 'pages/project';
import AboutPage from 'pages/about';
import { AppContextProvider } from 'components/context/app.context';
import '@/i18n';
import ContactPage from './pages/contact';
import ExperiencePage from './pages/experience';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/experience",
        element: <ExperiencePage />,
      },
      {
        path: "/project",
        element: <ProjectPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      }
    ]
  }

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </StrictMode>,
)
