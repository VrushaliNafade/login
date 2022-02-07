import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import './style.css';

class App extends Component {
    constructor(){
        super()
        this.state = {
            fullname:'',
            username:'',
            email:'',
            password:''
        }
        this.changefullname = this.changefullname.bind(this)
        this.changeusername = this.changeusername.bind(this)
        this.changeemail = this.changeemail.bind(this)
        this.changepassword = this.changepassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changefullname(event){
        this.setState({
            fullname:event.target.value
        })
    }
    changeusername(event){
        this.setState({
            username:event.target.value
        })
    }
    changeemail(event){
        this.setState({
            email:event.target.value
        })
    }
    changepassword(event){
        this.setState({
            password:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const registered = {
            fullname: this.state.fullname,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:4000/app/signin', registered)
            .then(response => console.log(response.data))
        /*window.location = '/'*/
        this.setState({
            fullname:'',
            username:'',
            email:'',
            password:''
        })

    }
    render() {
        return ( 
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form class="login-box" onSubmit={this.onSubmit}>
                        <h1>Welcome</h1>
                            <input type = 'text' 
                            placeholder='Enter Name' 
                            onChange={this.changefullname} 
                            value={this.state.fullname} 
                            className='form-control form-group'
                            id="fullname"/>

                            <input type = 'text' 
                            placeholder='Enter Username' 
                            onChange={this.changeusername} 
                            value={this.state.username} 
                            className='form-control form-group'
                            id="username"/>

                            <input type = 'text' 
                            placeholder='Enter Email' 
                            onChange={this.changeemail} 
                            value={this.state.email} 
                            className='form-control form-group'
                            id="email"/>

                            <input type = 'text' 
                            placeholder='Enter Password' 
                            onChange={this.changepassword} 
                            value={this.state.password} 
                            className='form-control form-group'
                            id="password"/>

                        <center><input type = 'submit' 
                            value='Sign In'/></center>
                        </form>
                    
                    </div>
                </div>
            </div>
        );
    }
}

export default App;