const getDocuments = async () => {
    let result = await fetch(`http://77.246.158.76/api/search?text=д`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
    return await result.json()
}

export default getDocuments