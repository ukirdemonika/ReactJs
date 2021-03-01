import React,{Component}from 'react';
import PROJECTS from './data/projects';

//props
class Project extends Component{
   
    render(){
        console.log(this.props);
        const { title,image,description,link}=this.props.Project;
        return(
            //<div>{this.props.Project.title}</div>
            <div style={{display:'inline-block',width:300,margin:10}}>
                <h3>{title}</h3>
                <img src={image} alt="profile" style={{ width:200, height:120}}/>
                <p>{description}</p>
                <a href={link}>{link}</a>
            </div>
        );
    }
}

class Projects extends Component{
    render(){
        return(
            <div>
                <h2>Highlighted projects</h2>
            <div>
                {
                    //to transform the project data items to individual pieces of JSX to render.
                    PROJECTS.map(PROJECT=>{     
                        return (
                           // <div key={PROJECT.id}>{PROJECT.title}</div>
                           //using props
                           <Project  key={PROJECT.id} Project={PROJECT}/>
                        )
                    })
                }
            </div>
            </div>
        )
    }
}


export default Projects;
