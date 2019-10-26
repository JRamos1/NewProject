import React, { Component } from "react"
import { Input, Submit } from "../SignUp"
import axios from "axios"
import {withRouter} from "react-router-dom"

class SignIn extends Component{
    state={
        email:'',
        password:"",
        message:"",
        
    }

    handleInputChange=event=>{
        const {name, value} = event.target

        this.setState({
            [name]:value
        })
    }

    handleSubmit=event=>{
        event.preventDefault()
        if(!this.state.email || !this.state.password){
            return
        }
        else{
            this.checkSignIn(this.state)
            
        }
    }

    checkSignIn(User){
        axios.post('./signin',User)
        .then(res=>{
            // console.log(res.data)
            if(res.data.message){
                this.setState({
                    message:res.data.message
                })
                console.log("Message:", this.state.message)
            }
            if(res.data.id) this.props.history.push('./')
        })
    }

    render(){
        return(
            <form className="form-inline">
                    <Input
                    name="email"
                    onChange={this.handleInputChange}
                    placeholder="Email"
                    />
                    <div>
                        {this.state.message==="Email does not exist"? this.state.message:""}
                    </div>
                    <br/>
                    <Input
                    name="password"
                    onChange={this.handleInputChange}
                    type="password"
                    placeholder="Password"
                    />
                    <div>
                        {this.state.message==="Incorrect password."? this.state.message:""}
                    </div>
                    <br/>
                    <Submit
                    onClick={this.handleSubmit}
                    />
                </form>
        )
    }
}

export default withRouter(SignIn)
