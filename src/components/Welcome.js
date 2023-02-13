import React, {Component} from 'react'

class Welcome extends Component
{
    constructor(){
        super()
        this.state={
           message:"HI" 
        }
    }
    updateMessage(){
        this.setState( {
            message:"Thank you"
        })
    }
    render(){
        return (
        //<h1>Hello class {this.props.name}</h1>
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.updateMessage()}>Update message</button>
        </div>
        )
    }
    
}

export default Welcome;