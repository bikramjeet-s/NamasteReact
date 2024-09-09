import User from './User';
import UserClass from './UserClass.js'
import { Component } from 'react';

class About extends Component{
    constructor(){
        super()
        console.log("About Constructor Called")
    }

    componentDidMount(){
        console.log("About mounted")
    }

    render(){
        console.log("About Render Called")
        return(
        <div>
            <h1>About Us</h1>
            <h2>Yes! This is me.</h2>
            {/* <User name={"Bikram @ functional"} location={"Chandigarh"}></User> */}
            <UserClass name = {"Child1"} location={"Chandigarh"}/>
            <UserClass name = {"Child2"} location={"Mohali"}/>
            {console.log("About Rendered")}
        </div>
        )
    }
}
// const About = () => {
//     return (
//         <div>
//             {console.log("Parent Render Called")}
//             <h1>About Us</h1>
//             <h2>Yes! This is me.</h2>
//             {/* <User name={"Bikram @ functional"} location={"Chandigarh"}></User> */}
//             <UserClass name = {"Bikram @ class-based"} location={"Mohali"}/>
//             {console.log("Parent Rendered")}
//         </div>
        
//     )
// }

export default About;