import React from 'react';

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count:0,
            userInfo : {
                name : "Bikram",
                location : "Mohali"
            }
        }

        console.log(this.props.name + " About Constructor Called")
    }

    async componentDidMount(){
        console.log(this.props.name + " About mounted")

        const data = await fetch("https://api.github.com/users/bikramjeet-s");
        const jsonData = await data.json()
        this.setState(
            {
                userInfo : jsonData
            }
        )
    }

    componentDidUpdate(){
        console.log("update called")
    }

    componentWillUnmount(){
        console.log("User-card is unmounted")
    }

    render(){
        console.log(this.props.name + " About Render Called")
        const {login, created_at, avatar_url} = this.state.userInfo;
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
                <img src={avatar_url}/>
                <h2>Name: {login}</h2>
                <h3>Location: {created_at}</h3>
                <h3>Contact Info: bikram@gmail.com</h3>
            </div>
        )
    }
}

export default UserClass;