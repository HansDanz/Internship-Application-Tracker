import {useState} from 'react'

import ApplicationCard from "./ApplicationCard.jsx"

function ApplicationsList(){
    const applications= [
        {company: "GovTech", status: "Interview", link: "#"},
        {company: "Grab", status: "Applied", link: "https://www.grab.careers/en/"}
    ]
    
    return(
        <>
            <h3>Current Applications</h3>
            <hr></hr>
            {applications.map(application => (
                <ApplicationCard 
                    company={application.company} 
                    status = {application.status} 
                    link = {application.link}/>
            ))}
        </>
    )
}

export default ApplicationsList