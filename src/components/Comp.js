import { Component } from "react";

class Comp extends Component{
    constructor(props){
        super(props);
        console.log(this.props.parent+" "+this.props.name + "Constructor")
    }

    componentDidMount(){
        console.log(this.props.parent+" "+this.props.name +" Mounted")
    }

    render(){
        return(
            <div>
                <h1>Hello
                </h1>
                {console.log(this.props.parent+" "+this.props.name +" render")}
            </div>
        )
    }

}

export default Comp;