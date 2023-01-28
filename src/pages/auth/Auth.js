import React, { useContext, useState } from "react"
import { AppContext } from "../.."
import { observer } from 'mobx-react-lite'
import { useNavigate } from "react-router-dom"
import AuthApi from "./AuthApi"

const Auth = observer(() => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [showResults, setShowResults] = useState(false)
    const {user} = useContext(AppContext)
    const navigate = useNavigate()

    const clickHandler = async () => {
        try {
            let data = {login: userName, password: password}
            let result = await AuthApi(data)
            console.log(result)
            if (result.ok) {
                user.setUser(data)
                user.setIsAuth(true)
                navigate("/what-to-do")
            } else {
                setShowResults(true)
            }
        } catch (e) {
            alert(e.message)
        }
        
        // user.setIsAuth(true)
        // localStorage.setItem('isAuth', user.isAuth)
    }

    const submitHandler = async (event) => {
        event.preventDefault()
        clickHandler()
    }

    return(
        <form onSubmit={submitHandler} style={{width: '557px', margin: '0 auto', paddingTop: '10rem'}}>
            {showResults ? <p style={{color: 'red'}}>неверный логин или пароль</p> : <p></p>}
            <div className="form-group">
                <input value={userName} onChange={e => setUserName(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div style={{paddingTop: '0.5rem'}} className="form-group">
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <button onClick={clickHandler} style={{marginTop: '5px'}} type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
})

export default Auth