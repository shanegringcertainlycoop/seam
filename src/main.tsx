import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import SiteLayout from './layouts/SiteLayout'
import Home from './pages/Home'
import BlogIndex from './pages/blog/BlogIndex'
import BlogPost from './pages/blog/BlogPost'
import APCredential from './pages/solutions/APCredential'
import Certification from './pages/solutions/Certification'
import Approved from './pages/solutions/Approved'
import DevelopersOwners from './pages/audiences/DevelopersOwners'
import Operators from './pages/audiences/Operators'
import CapitalProviders from './pages/audiences/CapitalProviders'
import ImpactProfessionals from './pages/audiences/ImpactProfessionals'
import Commons from './pages/community/Commons'
import IndividualMembership from './pages/community/IndividualMembership'
import OrganizationMembership from './pages/community/OrganizationMembership'

const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'certification', element: <Certification /> },
      { path: 'approved', element: <Approved /> },
      { path: 'ap-credential', element: <APCredential /> },
      { path: 'commons', element: <Commons /> },
      { path: 'commons/individual', element: <IndividualMembership /> },
      { path: 'commons/organization', element: <OrganizationMembership /> },
      { path: 'for/developers-owners', element: <DevelopersOwners /> },
      { path: 'for/operators', element: <Operators /> },
      { path: 'for/capital-providers', element: <CapitalProviders /> },
      { path: 'for/impact-professionals', element: <ImpactProfessionals /> },
      { path: 'resources/standard', lazy: () => import('./pages/resources/Standard').then(m => ({ Component: m.default })) },
      { path: 'resources/rossi', lazy: () => import('./pages/resources/Rossi').then(m => ({ Component: m.default })) },
      { path: 'resources/blog', element: <BlogIndex /> },
      { path: 'resources/blog/:slug', element: <BlogPost /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
