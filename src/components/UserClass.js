import React from 'react';
import Comp from './Comp';

class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            count:0,
            // count2:0
        }

        console.log(this.props.name + " About Constructor Called")
    }

    componentDidMount(){
        console.log(this.props.name + " About mounted")
    }

    render(){
        console.log(this.props.name + " About Render Called")

        const {count} = this.state
        const handleClick =() =>{
            this.setState({
                count : this.state.count+1
            })
        }
        // const handleClick2 =() =>{
        //     this.setState({
        //         count2 : this.state.count2+1
        //     })
        // }
        return (
            <div className='user-class-card'>
                <h1>Count: { count /*this.state.count (is need to do without deconstructing)*/}</h1>
                <button onClick={handleClick}>Count Increase</button>
                {/* <h1>Count2 : {this.state.count2}</h1>
                <button onClick={handleClick2}>Count2 Increase</button> */}
                <h2>Name: {this.props.name}</h2>
                <h3>Location: {this.props.location}</h3>
                <h3>Contact Info: bikram@gmail.com</h3>
                <Comp name="Shit1" parent={this.props.name} />
                <Comp name= "Shit2" parent = {this.props.name}/>
            </div>
        )
    }
}

export default UserClass;