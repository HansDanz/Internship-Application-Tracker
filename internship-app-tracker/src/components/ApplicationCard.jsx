import { useState, useEffect } from "react";

function ApplicationCard(props){    
    
    const [isEditing, setIsEditing] = useState(false);
    const [company, setCompany] = useState(props.company)
    const [status, setStatus] = useState(props.status)
    const [link, setLink] = useState(props.link)

    function handleSubmit(e) {
        e.preventDefault();

        const editedApp = {
            id: props.id,
            company,
            status: status,
            link
        };

        props.onEdit(props.id, editedApp);
        setIsEditing(false);

    }
    
    return(
        <div className="card">  
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                <label>
                    Company Name: <input type = "text" value = {company} onChange={(e) => setCompany(e.target.value)}/>
                </label>
                <br/>
                <label>
                    Link: <input type = "text" value = {link} onChange={(e) => setLink(e.target.value)}/>
                </label>
                <br/>
                <button className = "submit" type = "submit">Save</button>
                </form>
            ) : (   
                <>
                    <h4>{company}</h4>
                    <p>Link: <a href={props.link}>{props.link}</a> </p>
                    <p>Status: {status}</p>
                    <button className="back_forth">Prev. Stage</button>
                    <button className="back_forth">Next Stage</button>
                    <br/>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={props.onDelete}>Delete</button>
                </>      

            )
        }
        </div>
    )
}

export default ApplicationCard