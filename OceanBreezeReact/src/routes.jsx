import { Dashboard } from "./pages/Dashboard/Dashboard"
import { Auth } from "./pages/Auth/Auth.jsx"
import { Admin } from "./pages/Admin/Admin.jsx"

export const routes = [
    {
        path: '/auth',
        element: <Auth />
    },
    {
        path: '/*',
        element: <Dashboard />
    },
    {
        path: '/admin',
        element: <Admin/>
    },
    {
        path: '/dashboard',
        element: <Dashboard />
    },
]