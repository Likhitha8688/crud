// state --->pass the information with in the component
import { Component } from "react";

class State extends Component{
    constructor(props){
       super(props);
        this.state={
            id: 1,
            book: "react",
            author: "harry",
            data:0,
            value:""
        }
    }
    //update the state values using set State
    change=()=>{
        this.setState({
            id:2,
            book:"js",
            author:"jhon",
        })
      
    }
    increment=()=>{
        this.setState({
            data:this.state.data +1
        })
    }
    decrement=()=>{
        this.setState({
            data:this.state.data -1
        })
    }
    reset=()=>{
        this.setState({
            data:0
        })
    }

    update=(e)=>{
        this.setState({
           value:e.target.value
        })
    }


    render(){
        return(
            <div>
                <p>
                    id:{this.state.id}<br/>
                    book:{this.state.book}<br/>
                    author:{this.state.author}
                </p>
                <button onClick={this.change}>update</button><br/>
                <h3>Count:{this.state.data}</h3>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
                <button onClick={this.reset}>Reset</button><br/>

            <input type="text"onChange={this.update}/>
            <p>current values:{this.state.value}</p>

            </div>
        )
    }

}
export default State;