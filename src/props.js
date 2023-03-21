

//prop types--->is used to validate the datatypes
//command for prop-types ---->npm i prop-types
//functional components
/*
function Page(props){
    //const{name,city,age,state}=props
    return(
        <div>
            <p>
                name:{props.name}<br/>
                city:{props.city}<br/>
                age:{props.age}<br/>
                state:{props.state}

            </p>

        </div>
    )
}
function Props(){
    return(
        <div>
            <Page name="likhitha" city="banglore" age="25" state="karnataka"/>
        </div>
    )
}
export default Props;

*/
//when we use prop-types it doesn't need of two functions
//import PropTypes, { checkPropTypes } from "prop-types"
/*function Page1(props){
    //const{name,city,age,state}=props
    return(
        <div>
            <p>
                name:{props.name}<br/>
                city:{props.city}<br/>
                age:{props.age}<br/>
                state:{props.state}

            </p>

        </div>
    )
}
Page1.propTypes={
    name:PropTypes.string.isRequired,
    city:PropTypes.array,
    age:PropTypes.number,
    state:PropTypes.string

}
Page1.defaultProps={
    name:"likhitha",
    city:["banglore","chittoor","chennai"],
    age:25,
    state:"karnataka"
}
export default Page1;*/

//class based components
import React from "react"
import PropTypes from "prop-types"
class Page2 extends React.Component{
    render(){
        const{name,city,age,state}=this.props
        return(
            <div>
                <p>
                name:{name}<br/>
                city:{city}<br/>
                age:{age}<br/>
                state:{state}

                </p>

            </div>
        )
    }
}
Page2.propTypes={
    name:PropTypes.string.isRequired,
    city:PropTypes.array,
    age:PropTypes.number,
    state:PropTypes.string

}
Page2.defaultProps={
    name:"likhitha",
    city:["banglore","chittoor","chennai"],
    age:25,
    state:"karnataka"
}
export default Page2;