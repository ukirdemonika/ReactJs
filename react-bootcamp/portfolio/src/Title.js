import React,{Component, cpmponent} from 'react';

const TITLE=[
    "A software engineers",
    "A music lover",
    "A enthusiastic learner",
    "an adventure seeker"
];

//create class component
class Title extends Component{
    state={titleIndex:0};
    componentDidMount(){
        console.log("Title component has mounted ");
        this.animatedTitle();
    }

    animatedTitle=()=>{
        setInterval(()=>{
            const titleIndex=(this.state.titleIndex+1)%TITLE.length;     //loopback from 0 to 4 again
            this.setState({titleIndex});
        },4000);  //first arg is callback function
    }
    
    render(){
        const title=TITLE[this.state.titleIndex];
        return(
            <p>I am {title}</p>
        )
    }
}
export default Title;