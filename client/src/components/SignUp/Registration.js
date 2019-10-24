import React, {Component} from 'react'
import {Input, Submit} from "../SignUp"
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import Container from 'react-bootstrap'

class Signup extends Component{
    state={
        firstName:'',
        lastName:'',
        email:'',
        password:''
    }

    handleInputChange = event => {
        const{ name, value } = event.target

        console.log("Signup", name, value)
        
        this.setState({
            [name]: value
        })

    }

    handleFormSubmit = event =>{
        event.preventDefault();
        console.log("Submitting", this.state)

        if(!this.state.firstName || !this.state.lastName || !this.state.email || !this.state.password){
            return;
        }
        else{
            console.log(this.state,"Submitted!")
            this.submitUserData(this.state)

        }
    }

    submitUserData(User){
        axios.post('/signup', User)
        .then(res=>{
            console.log(res.data.id)
            if(res.data.message) console.log("Response", res.data.message)
            if(res.data.id) this.props.history.push('/')
        })
    }

    
    render(){

        return(
            <div className='container'>
                <div className='border-input container'>
                    <p className='text-center'>Sign Up!</p>
                    First name
                    <Input
                        name="firstName"
                        onChange={this.handleInputChange}
                    />
                    Last name
                    <Input
                        name="lastName"
                        onChange={this.handleInputChange}
                    />
                    Email
                    <Input
                        name="email"
                        onChange={this.handleInputChange}
                    />
                    Password
                    <Input
                        name='password'
                        onChange={this.handleInputChange}
                        type='password'
                    />
                    <Submit
                        onClick={this.handleFormSubmit}
                    />

                </div>
            </div>
        )
    }
}

export default withRouter(Signup)