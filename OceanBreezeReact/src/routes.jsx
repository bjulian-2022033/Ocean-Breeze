import { Dashboard } from "./pages/Dashboard/Dashboard"
import { Auth } from "./pages/Auth/Auth.jsx"

export const routes = [
    {
        path: '/auth',
        element: <Auth />
    },
    {
        path: '/*',
        element: <Dashboard />
    }
]