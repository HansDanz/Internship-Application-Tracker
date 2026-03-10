import {useState} from 'react'

function NewApplication({ onAddApplication }){
    const [company, setCompany] = useState("")
    const [status, setStatus] = useState("")
    const [link, setLink] = useState("")

    function handleSubmit(e) {
        e.preventDefault();

        const newApp = {
            id: Date.now(),
            company,
            status: "Applied",
            link
        };

        onAddApplication(newApp);

        setCompany("");
        setStatus("");
        setLink("");
    }
    
    return(
        <>
            <h3>Track New Application</h3>
            <hr/>
            <form onSubmit={handleSubmit}>
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