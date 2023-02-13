import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        };
    }
    Increment(){
        // this.state.count=this.state.count+1;
        // console.log(this.state.count);
       
        // this.setState({
        //     count:this.state.count+1,
        //     today:'india'
        // },()=>{console.log('counter value',this.state.count)});
        this.setState(previousState=>({
            count:previousState.count+1
        }))
    }
    IncrementFive(){
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
    }
  render() {
    return (
      <div>
       <div>Count - {this.state.count}</div> 
       <button onClick={()=>this.IncrementFive()}>Increment Five</button>
      </div>
    )
  }
}

export default Counter
