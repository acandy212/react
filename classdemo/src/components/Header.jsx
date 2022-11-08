import React, { Component } from "react";
import MainBody from "./MainBody";

class Header extends Component{
    constructor(props){
        super(props)
        this.state = { 
            count: 0, 
            theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light",
            name: ""
        }
    }



    render(){
        const { linkText, linkUrl } = this.props
        const name = this.state.name

        return(
            <header className={`App-header ${this.state.theme}`}>
                <div>
                <h1>
                Amanda Candies's Resume
                </h1>
                <h5> Information Technology Major pursuing a Web Development Certification</h5>
                </div>
                <h3 className="experience">Experience</h3>
                <h5>UITS HELP DESK, Columbus State University-Student Assistant</h5>
                <h6>October 2022-Present</h6>
                <h6>
                    <ul>
                        <li>Troubleshot devices for student and faculty</li>
                        <li>Direct students, faculty, and staff to the proper departments for further assistance</li>
                        <li>Assisted faculty and students with technical support issues</li>
                        <li>Establish and reset student passwords and Mult-Factor Authentication</li>
                    </ul>
                </h6>
                <MainBody />
            </header>
        )
    }
}

export default Header