import React from "react";

class Header extends React.Component{

    render(){
        const { linkText, linkUrl } = this.props

        return(
            <header className="App-header">
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href={linkUrl} target="_blank" rel="noopener noreferrer" >
                    {linkText}
                </a>
            </header>
        )
    }
}

export default Header