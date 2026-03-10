function ApplicationsCard(props){    
    return(
        <div className="card ">            
        <h4>{props.company}</h4>
        <p>Link: <a href={props.link}>{props.link}</a> </p>
        <p>Status: {props.status}</p>
        <button className="back_forth">Prev. Stage</button>
        <button className="back_forth">Next Stage</button>
        </div>
    )
}

export default ApplicationsCard