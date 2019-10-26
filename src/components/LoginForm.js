import React, { Component } from 'react'
import { VERIFY_USER } from '../Events'


export default class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            nickname : "",
            error : ""
        };
    }

    setUser = ({user, isUser})=>{
        console.log({user, isUser})
        if(isUser){
            this.setError("User Name Taken")
        }
        else{
            this.props.setUser(user)
            this.setError("")
        }
    }

    handleSubmit = (evt) =>{
        evt.preventDefault()
        const { socket } = this.props
        const { nickname } = this.state
        socket.emit(VERIFY_USER, nickname, this.setUser)

    }

    handleChange = (evt) =>{
        this.setState({
            nickname : evt.target.value
        })


    }

    setError = (error) => {
        this.setState({error})
    }
    render() {
        const { nickname, error } = this.state
        return (
            <div className="login">
                <form onSubmit={this.handleSubmit} className="login-form">
                    <label htmlFor="nickname">
                        <h2>Got a nickname?</h2>
                    </label>
                    <input
                        ref={(input)=>{ this.textInput = input }}
                        type="text"
                        id="nickname"
                        value={nickname}
                        onChange={this.handleChange}
                        placeholder={'MyCoolUserName'}
                        />
                        { error && <div className="error">{error}</div>}
                </form>
            </div>
        )
        
    }


}