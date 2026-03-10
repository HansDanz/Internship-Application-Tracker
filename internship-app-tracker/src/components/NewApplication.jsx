import {useState} from 'react'

function NewApplication(){
    const [company, setCompany] = useState("")
    const [status, setStatus] = useState("")
    const [link, setLink] = useState("")
    
    return(
        <>
            <h3>Track New Application</h3>
            <hr/>
            <form>
                <label>
                    Company Name: <input type = "text" value = {company} onChange={(e) => setCompany(e.target.value)}/>
                </label>
                <br/>
                <label>
                    Link: <input type = "text" value = {link} onChange={(e) => setLink(e.target.value)}/>
                </label>
                <br/>
                <button className = "submit" type = "submit">+ Add New</button>
            </form>
        </>
    )
}

export default NewApplication