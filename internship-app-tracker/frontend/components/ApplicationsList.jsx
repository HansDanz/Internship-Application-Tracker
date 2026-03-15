import {useState, useEffect} from 'react'
import ApplicationCard from "./ApplicationCard.jsx"
import NewApplication from './NewApplication.jsx';
import {fetchApplications, addApplications, editApplications, deleteApplications} from "../api/applications.jsx";

function ApplicationsList(){
    console.log("Applications component rendered");
    
    const [applications, setApplications] = useState([])
        /*
        [
        {id: 1, company: "GovTech", status: "Interview", link: "#"},
        {id: 2, company: "Grab", status: "Applied", link: "https://www.grab.careers/en/"}
        ]

        useEffect(() => {
        fetch("http://127.0.0.1:8000/applications")
            .then(res => res.json())
            .then(data => setApplications(data));
    }, []);
        */
    
    useEffect(() => {
        fetchApplications().then(data => setApplications(data));
    }, []);

    useEffect(() => {
        console.log("Applications state:", applications);
    }, [applications]);
    

    function addApplication(app) {
        addApplications(app).then(data => setApplications(data));
    }

    function deleteApplication(id) {
        deleteApplications(id).then(data => setApplications(data));
    }
    
    function editApplication(id, editedApp) {
        editApplications(id, editedApp).then(data => setApplications(data));
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