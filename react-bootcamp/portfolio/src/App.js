import React,{Component}  from 'react';

class Regularclass{}
class Componentclass extends Component{}
const regularclass=new Regularclass();
const componentclass=new Componentclass();
console.log("Regular class=",regularclass);
console.log("componentclass=",componentclass);

class App extends Component{
    render(){
        return(
            <div>
                <h1>Hello,</h1>
                <p>My name is Monika.I'm a software engineer.</p>

            </div>
        )
    }
}
export default App;