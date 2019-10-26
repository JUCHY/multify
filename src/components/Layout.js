import React, { Component } from 'react';
import LoginForm from './LoginForm'
import { USER_CONNECTED, LOGOUT } from '../Events';
import io from 'socket.io-client'

const socketURL  = "http://localhost:3231/"
export default class Layout extends Component{

    
    constructor(props){
        super(props);

        this.state = {
            socket: null,
            user: null
        }
    }

    componentWillMount(){
        
        this.initSocket()

    }

    setUser = (user) =>{
        const { socket } = this.state
        socket.emit(USER_CONNECTED, user);
        this.setState({user})
    }

    logout = () => {
        const {socket} = this.state
        socket.emit(LOGOUT)
        this.setState({user:null})

    }

    initSocket = () => {
        const socket = io(socketURL)
        socket.on('connect', () =>{
            console.log("Connected")
        })
        this.setState({socket})

    }

    render() {

        const { title } = this.props
        const { socket } = this.state
        return(
            <div className="container">
                {title}
                <LoginForm socket={socket} setUser={this.setUser} />
            </div>
        )
    }


}