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

                <h5>LEARNING INTERNSHIP - Vitae Electronics</h5>
                <h6>August 2022-Present</h6>
                <h6>
                    <ul>
                        <li>Web Development Programming (HTML, CSS, JavaScript, etc.)</li>
                        <li>Database construction and management (Relational Database Methodologies / SQL)</li>
                        <li>Cloud Platform management (e.g., Google Cloud Platform)</li>
                        <li>Machine Learning model deployment</li>
                        <li>Code Editors (Visual Studio, Vim, Eclipse, Atom, etc.) and Version Control (GitHub)</li>
                    </ul>
                </h6>

                <h3 className="education">Education/Classes Taken</h3>
                <h5>COLUMBUS STATE UNIVERSITY, Columbus Ga-Graduate in 2023</h5>
                <h6>
                    <ul>
                        <li>Web Development (Html and CSS)</li>
                        <li>Intro to Graphic User Interface (Visual Studio)</li>
                        <li>Database Design</li>
                        <li>Computer Science  (Python and Java)</li>
                        <li>Amazon Web Service (AWS)</li>
                    </ul>
                </h6>

                <h5>STOCKBRIDGE HIGH SCHOOL, Stockbridge Ga - Diploma</h5>
                <h6>August 2016-May 2020</h6>
                <h6>
                    <ul>
                        <li>Computer Science (Python)</li>
                        <li>Programming games and apps</li>
                        <li>Dual Enrollment Student - Gordon State College</li>
                    </ul>
                </h6>
                <MainBody />
            </header>
        )
    }
}

export default Header