import { lazy } from 'react'
// router
import { Navigate, useRoutes } from 'react-router'
// components
import Loadable from 'components/loaders/Loadable'
// urls
import urls from './urls'

// layouts
import ProtectedLayout from 'layout/projectedLayout/Index'
import AuthLayout from 'layout/authLayout/Index'

// auth pages
const Login = Loadable(lazy(() => import('pages/auth/login/Index')))
const Otp = Loadable(lazy(() => import('pages/auth/otp/Index')))
const ForgetPassword = Loadable(lazy(() => import('pages/auth/forgetPassword/Index')))
const ResetPassword = Loadable(lazy(() => import('pages/auth/ResetPassword/Index')))

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
            path: urls.auth.root,
            element: <AuthLayout />,
            children: [
                {
                    path: urls.auth.root,
                    element: <Navigate to={urls.auth.login} replace />,
                },
                {
                    path: urls.auth.login,
                    element: <Login />,
                },
                {
                    path: urls.auth.otpVerification,
                    element: <Otp />,
                },
                {
                    path: urls.auth.forgetPassword,
                    element: <ForgetPassword />,
                },
                {
                    path: urls.auth.resetPassword,
                    element: <ResetPassword />,
                },
            ],
        },
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
