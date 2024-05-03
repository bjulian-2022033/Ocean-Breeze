import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Auth } from "./pages/Auth/Auth";

export const routes = [
    {
        path: '/*', 
        element: <Dashboard/>
    },
    {
        path: '/auth',
        element: <Auth/>
    }
]