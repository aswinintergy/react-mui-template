const urls = {
    // AUTH URLS
    auth: {
        root: '/auth',
        login: '/auth/login',
        otpVerification: '/auth/otp-verification',
        resetPassword: '/auth/reset-password',
        forgetPassword: '/auth/forget-password',
    },

    // PROTECTED PAGES
    upload: '/',
    review: '/review',
    reports: '/reports',
    settings: {
        root: '/settings',
        manageUser: '/settings/user-management',
        accounts: '/settings/accounts',
        centers: '/settings/centers',
    },
    profile: {
        root: '/profile',
        editProfile: '/profile/edit-profile',
    },
    status: {
        error: '/404',
        unauthorized: '/401',
    },

    // DOCS

    docs: {
        root: '/docs',
    },
}

export default urls
