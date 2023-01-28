import Auth from '../pages/auth/Auth'
import Documents from '../pages/docs/Documents'
import TaskManager from '../pages/Task/TaskManager'
import WhatToDo from '../pages/choose_activity/WhatToDo'

export const autuhRoutes = [
    {
        path: '/documents_auth',
        Component: Documents
    },
    {
        path: '/task-manager_auth',
        Component: TaskManager
    },
    {
        path: '/what-to-do',
        Component: WhatToDo
    }
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