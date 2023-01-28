import React from "react"
import { Link } from "react-router-dom"
import NavBar from "../../components/NavBar"

const myStyle={
    backgroundImage: "url(https://sportishka.com/uploads/posts/2022-03/1647938865_67-sportishka-com-p-krasota-zimnego-baikala-turizm-krasivo-fot-71.jpg)",
    height:'100vh',
    backgroundSize: 'cover'
}

const WhatToDo = () => {
    return (
        <div style={myStyle}>
        <NavBar />
            <div className="wrapper">
                <h1 style={{marginTop: '10rem'}}>Choose what you want to do</h1>
                <form>
                    <Link to="/task-manager_auth"><button type="submit" className="btn btn-primary">Task Manager</button></Link>
                </form>
                <form style={{marginTop: '5px'}}>
                    <Link to="/documents_auth"><button type="submit" className="btn btn-primary" style={{width: '128px'}}>Documents</button></Link>
                </form>
            </div>
        </div>
    )
}

export default WhatToDo