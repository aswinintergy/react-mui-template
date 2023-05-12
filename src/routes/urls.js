const urls = {
    // AUTH URLS
    login: '/login',
    otpVerification: '/otp-verification',
    resetPassword: '/reset-password',
    forgetPassword: '/forget-password',

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
