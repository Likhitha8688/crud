//-->composition
//combining one component and another component it converts into new component
/*import {App1,App2} from "./hello.js"
export function App(){
    return(
        <div>
            <input type="text"/>
            <App1/>
            <App2/>
        </div>
    )
}*/

//class based components
/*import React,{Component} from "react"
import Hello from "./hello.js"
class Apps extends Component{
    render(){
        return(
            <div>
                <h3>class based components</h3>
                <Hello/>
            </div>
        )
    }
}
export default Apps;*/

import React,{Component} from "react"
class Apps extends Component{
    render(){
        return(
            <div>
                <h3>class based components</h3>
                <Hello/>
            </div>
        )
    }
}
class Hello extends Apps{
    render(){
        const parent=super.render()
        return(
            <div>
                {parent}
                <h3>hello component</h3>
            </div>
        )
    }
}
export default Hello;

