import React, { Component } from "react";

class Header extends Component{
    constructor(props){
        super(props)
        this.state = { 
            count: 0, 
            theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"
        }
    }



    render(){
        const { linkText, linkUrl } = this.props
        //this.props.linkText
        console.log(this.state)

        return(
            <header className={`App-header ${this.state.theme} ${this.state.count}`}>
                <p className={"testing-this " + this.state.theme}>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href={linkUrl} target="_blank" rel="noopener noreferrer" >
                    {linkText}
                </a>
                <span>
                    You have clicked on the button {this.state.count} times!
                </span>
                <button onClick= {() => this.setState({ count : this.state.count + 1})}>
                    Increment Count
                </button>
            </header>
        )
    }
}

export default Header