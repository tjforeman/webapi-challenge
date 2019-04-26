import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import Projects from './Projects'

class ProjectList extends React.Component{
    constructor(){
        super();
        this.state={
          projects:[]
        }
    }
    componentDidMount(){
      axios
      .get('http://localhost:8000/api/projects') 
      .then(res => {
          console.log(res.data)
        this.setState({projects:res.data})
        console.log(this.state.projects)
      })
      .catch(err=>{
        console.log(err)
      })
  }
  refeshState=() =>{
    axios
          .get(`http://localhost:8000/api/projects`) 
          .then(res =>{
            this.setState({projects:res.data})
          })
    }

    deleteProject= id=>{
        axios
        .delete(`http://localhost:8000/api/projects/${id}`) 
        .then(res =>{
          console.log(res)
          this.refeshState()
        })
        .catch(err=>{
          console.log(err)
        })
      }   



    render(){
        return(
            <div className='project-wrapper'>
            <h2>My Projects</h2>
            <div className='project-container'>
            {this.state.projects.map(data => {
            return (
                <Projects
                id={data.id}
                name={data.name}
                notes={data.notes}
                deleteProject={this.deleteProject}

              />
            );
          })}
          </div>
            </div>
        )
    }
}

export default ProjectList