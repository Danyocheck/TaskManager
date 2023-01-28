const AuthApi = async (user) => {
    let result = await fetch("http://77.246.158.76/api/auth/login", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    return result
}

export default AuthApi