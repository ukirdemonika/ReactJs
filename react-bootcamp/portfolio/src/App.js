import React,{Component}  from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png';
import Title from './Title';
// class Regularclass{}
// class Componentclass extends Component{}
// const regularclass=new Regularclass();
// const componentclass=new Componentclass();
// console.log("Regular class=",regularclass);
// console.log("componentclass=",componentclass);

class App extends Component{
    state={displayBio:false};
    /*constructor(){
        super();
        this.state={displayBio:false};   //change false to true then visible the state div on webpage

        // this.readMore=()=>{
        //     console.log(this);
        // }
        //bind the readmore to the component of "this" object
        this.toggleDisplayBio=this.toggleDisplayBio.bind(this);
    }*/
    toggleDisplayBio=()=>{
        this.setState({displayBio:!this.state.displayBio});
    }
    render(){
        // const bio=this.state.displayBio?(
        //     <div>
        //             <p>I live in India.</p>
        //             <p>I like javascript, and ReactJs.</p>
        //     </div>
        // ):null;       
        return(
            <div>
                <img src={profile} alt="profile" className="profile" />
                <h1>Hello,</h1>
                
                <p>My name is Monika.</p>
                <Title />
                {/* {bio} */}
                {
                    this.state.displayBio?(
                        <div>
                            <p>I live in India.</p>
                            <p>I like javascript, and ReactJs.</p>
                            <button onClick={this.toggleDisplayBio}>Show less</button>

                        </div>
                    ):(
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read more</button>
                        </div>
                    )  
                }<hr/>
                <div>
                    <Projects />
                </div> 
                <hr/>
                <div>
                    <SocialProfiles />
                </div>
                
            </div>
            

        )
    }
}
export default App;