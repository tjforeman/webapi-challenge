import React from 'react'
import { Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'

const Projects = props => {
    return(
        <div className='project-wrapper'>
        <div className='projects-wrapper'>
       {/* <Link to={`/trips/${props.id}`}>  */}
       <h2>{props.name}</h2>
       <h4> {props.description}</h4>
       <p>{props.notes}</p>

       {/* </Link> */}
        <Button color= 'primary' onClick={()=> props.deleteProject(props.id)}>Delete Project</Button>
        </div>
        </div>
    )
}


export default Projects