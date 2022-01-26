import {ACCOUNT_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE, NEWS_PAGE_ROUTE, NEWS_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import Admin from "./pages/Admin";
import Account from "./pages/Account";
import News from "./pages/News";
import Auth from "./pages/Auth";
import NewsPage from "./pages/NewsPage";

export const authRoutes = [
    {
        path:ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: ACCOUNT_ROUTE,
        Component: Account
    }
]

export const publicRoutes = [
    {
        path: NEWS_ROUTE,
        Component: News
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: NEWS_PAGE_ROUTE  + '/:id',
        Component: NewsPage
    }
]