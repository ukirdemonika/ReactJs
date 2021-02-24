import React,{Component}  from 'react';

// class Regularclass{}
// class Componentclass extends Component{}
// const regularclass=new Regularclass();
// const componentclass=new Componentclass();
// console.log("Regular class=",regularclass);
// console.log("componentclass=",componentclass);

class App extends Component{
    constructor(){
        super();
        this.state={displayBio:false};   //change false to true then visible the state div on webpage
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
                <h1>Hello,</h1>
                <p>My name is Monika.I'm a software engineer.</p>
                {/* {bio} */}
                {
                    this.state.displayBio?(
                        <div>
                            <p>I live in India.</p>
                            <p>I like javascript, and ReactJs.</p>
                        </div>
                    ):null  
                } 
            </div>
        )
    }
}
export default App;