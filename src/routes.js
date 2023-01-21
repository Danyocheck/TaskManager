import Auth from './pages/Auth'
import Documents from './pages/Documents'
import TaskManager from './pages/TaskManager'

export const autuhRoutes = [
    {
        path: '/documents_auth',
        Component: Documents
    },
    {
        path: '/task-manager_auth',
        Component: TaskManager
    },
]

export const publicRoutes = [
    {
        path: '/documents',
        Component: Documents
    },
    {
        path: '/task-manager',
        Component: TaskManager
    },
    {
        path: '/auth',
        Component: Auth
    }
]