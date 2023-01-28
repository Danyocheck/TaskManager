import React, { useContext } from "react"
import { Routes, Route, Navigate } from 'react-router-dom'
import { autuhRoutes, publicRoutes } from "./routes"
import { AppContext } from ".."
import { observer } from "mobx-react-lite"

const AppRouter = observer(() => {
    const {user} = useContext(AppContext)
    if (localStorage.getItem('isAuth') === 'true') {
        user.setIsAuth(true)
    }

    return(
        <Routes>
            {user.isAuth && autuhRoutes.map(({path, Component}) => {
                return (<Route key={path} path={path} element={<Component />} />)
            })}
            {publicRoutes.map(({path, Component}) => {
                return (<Route key={path} path={path} element={<Component />} />)
            })}
            <Route path='*' element={<Navigate to={'/auth'} />} />
        </Routes>
    )
})

export default AppRouter