import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'

// During Figma capture, add class to disable all entrance animations
if (window.location.hash.includes('figmacapture')) {
  document.documentElement.classList.add('figma-capture')
}
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
import PeopleCommunities from './pages/audiences/PeopleCommunities'
import Commons from './pages/community/Commons'
import IndividualMembership from './pages/community/IndividualMembership'
import OrganizationMembership from './pages/community/OrganizationMembership'
import Pricing from './pages/Pricing'

const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', lazy: () => import('./pages/About').then(m => ({ Component: m.default })) },
      { path: 'pricing', element: <Pricing /> },
      { path: 'certification', element: <Certification /> },
      { path: 'approved', element: <Approved /> },
      { path: 'ap-credential', element: <APCredential /> },
      { path: 'community', element: <Commons /> },
      { path: 'community/individual', element: <IndividualMembership /> },
      { path: 'community/organization', element: <OrganizationMembership /> },
      { path: 'for/developers-owners', element: <DevelopersOwners /> },
      { path: 'for/operators', element: <Operators /> },
      { path: 'for/capital-providers', element: <CapitalProviders /> },
      { path: 'for/impact-professionals', element: <ImpactProfessionals /> },
      { path: 'for/people', element: <PeopleCommunities /> },
      // Rating Systems
      { path: 'rating-system', lazy: () => import('./pages/rating-systems/RatingSystemsOverview').then(m => ({ Component: m.default })) },
      { path: 'rating-system/buildings-interiors', lazy: () => import('./pages/rating-systems/BuildingsInteriors').then(m => ({ Component: m.default })) },
      { path: 'rating-system/operations-maintenance', lazy: () => import('./pages/rating-systems/OperationsMaintenance').then(m => ({ Component: m.default })) },
      { path: 'rating-system/community-development', lazy: () => import('./pages/rating-systems/CommunityDevelopment').then(m => ({ Component: m.default })) },
      // Standard Pillars
      { path: 'standard/social-impact', lazy: () => import('./pages/standard/SocialImpact').then(m => ({ Component: m.default })) },
      { path: 'standard/social-responsibility', lazy: () => import('./pages/standard/SocialResponsibility').then(m => ({ Component: m.default })) },
      { path: 'standard/social-justice', lazy: () => import('./pages/standard/SocialJustice').then(m => ({ Component: m.default })) },
      { path: 'standard/social-accountability', lazy: () => import('./pages/standard/SocialAccountability').then(m => ({ Component: m.default })) },
      // Resources
      { path: 'resources/standard', lazy: () => import('./pages/resources/Standard').then(m => ({ Component: m.default })) },
      { path: 'resources/rossi', lazy: () => import('./pages/resources/Rossi').then(m => ({ Component: m.default })) },
      { path: 'resources/blog', element: <BlogIndex /> },
      { path: 'resources/blog/:slug', element: <BlogPost /> },
      // Directory
      { path: 'directory', lazy: () => import('./pages/directory/DirectoryIndex').then(m => ({ Component: m.default })) },
      { path: 'directory/ap/:slug', lazy: () => import('./pages/directory/APDetail').then(m => ({ Component: m.default })) },
      { path: 'directory/project/:slug', lazy: () => import('./pages/directory/ProjectDetail').then(m => ({ Component: m.default })) },
      { path: 'directory/activity/:slug', lazy: () => import('./pages/directory/ActivityDetail').then(m => ({ Component: m.default })) },
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
