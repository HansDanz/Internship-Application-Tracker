import {useState} from 'react'
import ApplicationCard from "./ApplicationCard.jsx"
import NewApplication from './NewApplication.jsx';

function ApplicationsList(){
    const [applications, setApplications] = useState(
        [
        {id: 1, company: "GovTech", status: "Interview", link: "#"},
        {id: 2, company: "Grab", status: "Applied", link: "https://www.grab.careers/en/"}
        ]
    )

    function addApplication(app) {
    setApplications([...applications, app]);
    }

    function deleteApplication(id) {
        setApplications(applications.filter(app => app.id !== id));
    }
    
    function editApplication(id, editedApp) {
        setApplications(applications.map(application => application.id === id ? editedApp: application));
    }

    return(
        <>
            <h3>Current Applications</h3>
            <hr></hr>
            {applications.map(application => (
                <ApplicationCard 
                    key={application.id}
                    company={application.company} 
                    status = {application.status} 
                    link = {application.link}
                    id = {application.id}
                    onDelete={() => deleteApplication(application.id)}
                    onEdit={editApplication}/>
            ))}
            <NewApplication onAddApplication={addApplication} />
        </>
    )
}

export default ApplicationsList