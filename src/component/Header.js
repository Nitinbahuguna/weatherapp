import React from 'react'

class Header extends React.Component{
    
    render(){        
        const mystyle = {           
            textAlign: "center",
            color: "White",
            //backgroundColor: "DodgerBlue",
            fontFamily: "serif",
            fontSize: "2.5em"                                      
          }
          
    return(<h1 style={mystyle}>WEATHER APP</h1>)
    }
}

export default Header