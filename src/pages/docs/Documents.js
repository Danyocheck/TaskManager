import React, { useEffect, useState } from "react"
import getDocuments from "./DocumnetsApi"

const Documents = () => {
    const [docName, setDocName] = useState('')
    const [docs, setDocs] = useState([])

    useEffect(() => {
        const getDocs = async () => {
            let allDocs = await getDocuments()
            setDocs(allDocs.results)
        }
        getDocs()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <div className="wrapper">
            <h1>Documents</h1>
            <input style={{width: '300px'}} placeholder="Введите название документа" onChange={(e) => setDocName(e.target.value)}></input>
            <form>
            {
                docs.map(doc => {
                    if (doc.title.startsWith(docName)) {
                        return (
                            <div key={doc._id} id="title">{doc.title}</div>
                        )
                    }
                    return <div key={doc._id}></div>
                })
            }
            </form>
        </div>
    )
}

export default Documents