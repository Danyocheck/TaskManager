import React, { useContext, useState } from "react"
import { AppContext } from ".."
import { observer } from 'mobx-react-lite'
import { Link } from "react-router-dom"

const Auth = observer(() => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const {user} = useContext(AppContext)

    function submitHandler(event) {
        event.preventDefault()

    }

    function clickHandler() {
        user.setIsAuth(true)
        console.log(user.isAuth)
    }

    return(
        <form onSubmit={submitHandler} style={{width: '557px', margin: '0 auto', paddingTop: '10rem'}}>
            <div className="form-group">
                <input value={userName} onChange={e => setUserName(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div style={{paddingTop: '0.5rem'}} className="form-group">
                <input pasword={password} onChange={e => setPassword(e.target.password)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <Link to="/task-manager_auth"><button onClick={clickHandler} style={{marginTop: '5px'}} type="submit" className="btn btn-primary">Submit</button></Link>
        </form>
    )
})

export default Auth