import React,{Component}from 'react';
import PROJECTS from './data/projects';

class Projects extends Component{
    render(){
        return(
            <div>
                <h2>Highlighted projects</h2>
            <div>
                {
                    //to transform the project data items to individual pieces of JSX to render.
                    PROJECTS.map(PROJECTS=>{     
                        return (
                            <div key={PROJECTS.id}>{PROJECTS.title}</div>
                        )
                    })
                }
            </div>
            </div>
        )
    }
}


export default Projects;
