import { lazy } from 'react'
// router
import { Navigate, useRoutes } from 'react-router'
// components
import Loadable from 'components/loaders/Loadable'
// urls
import urls from './urls'
// layouts
import ProtectedLayout from 'layout/projectedLayout/Index'

// pages
const Upload = Loadable(lazy(() => import('pages/upload/Index')))
const Review = Loadable(lazy(() => import('pages/review/Index')))
const Reports = Loadable(lazy(() => import('pages/reports/Index')))
const Settings = Loadable(lazy(() => import('pages/settings/Index')))
const Error = Loadable(lazy(() => import('pages/status/Error')))
const Docs = Loadable(lazy(() => import('docs/Index')))

const Routes = () => {
    return useRoutes([
        {
            path: '',
            element: <ProtectedLayout />,
            children: [
                {
                    path: urls.upload,
                    element: <Upload />,
                },
                {
                    path: urls.review,
                    element: <Review />,
                },
                {
                    path: urls.reports,
                    element: <Reports />,
                },
                {
                    path: urls.settings.root,
                    children: [
                        {
                            path: urls.settings.root,
                            element: <Navigate to={urls.settings.manageUser} replace />,
                        },
                        {
                            path: urls.settings.manageUser,
                            element: <Settings />,
                        },
                    ],
                },
                // docs
                {
                    path: urls.docs.root,
                    element: <Docs />,
                },
            ],
        },
        {
            path: urls.status.error,
            element: <Error />,
        },
        {
            path: urls.status.unauthorized,
            element: <Error />,
        },
        {
            path: '*',
            element: <Error />,
        },
    ])
}

export default Routes
