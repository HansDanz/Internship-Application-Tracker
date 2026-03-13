const API_URL = "http://127.0.0.1:8000/applications";

export async function fetchApplications(){
    try{
        const response = await fetch(API_URL);
        return response.json();
    }
    catch(error){
        console.log(error);
    }
}

export async function addApplications(application){
    try{
        const response = await fetch(API_URL,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(application)
        });
        return response.json();
    }
    catch(error){
        console.log(error);
    }
}

export async function editApplications(id, application){
    try{
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(application)
        });
        return response.json();
    }
    catch(error){
        console.log(error);
    }
}

export async function deleteApplications(id){
    console.log("Trying")
    try{
        console.log("Trying")
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });
         return response.json();
    }
    catch(error){
        console.log(error)
    }
}

