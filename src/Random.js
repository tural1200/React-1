import React, { Component } from "react";

class Random extends Component {
    constructor(props) {
        super(props);


        this.state = {number: null};
        this.myFunction=this.myFunction.bind(this);
        
        
        
    }
   


    myFunction() {
        const randomNumber = Math.floor(Math.random() * 10)+1;
        this.setState({number:randomNumber})
        
    }



    

    render() {
        if (this.state.number===5) {
            return(
                <>
                    <div>
                        <h1>Your number is: {this.state.number}</h1>
                        <h2>you win</h2>
                        <button onClick={this.myFunction}>click</button>
                    </div>
                </>
                
            )
        } else {
            return(
                <>
                    <div>
                        <h1>Your number is: {this.state.number}</h1>
                        <button onClick={this.myFunction}>click </button>
                    </div>
                </>
                
            )
        }
        
    }
}



export default Random