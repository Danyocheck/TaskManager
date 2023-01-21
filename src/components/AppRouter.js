import React, { useContext } from "react"
import { Routes, Route, Navigate } from 'react-router-dom'
import { autuhRoutes, publicRoutes } from "../routes"
import { AppContext } from ".."
import { observer } from 'mobx-react-lite'

const AppRouter = observer(() => {
    const {user} = useContext(AppContext)
    console.log(user.isAuth)
    return(
        <Routes>
            {user.isAuth && autuhRoutes.map(({path, Component}) => {
                console.log(path)
                return (<Route key={path} path={path} element={<Component isAuth={user.isAuth}/>} />)
            })}
            {publicRoutes.map(({path, Component}) => {
                return (<Route key={path} path={path} element={<Component />} />)
            })}
            <Route path='*' element={<Navigate to={'/auth'} />} />
        </Routes>
    )
})

export default AppRouter