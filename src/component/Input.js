import React from 'react'
import Body from "./Body"
import "./css/input.css"


class Input extends React.Component{
    constructor(){
        super()
        this.state={
            city:"",           
            data:""
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        event.preventDefault()       
        let city=this.state.city
        
        //const API_KEY = process.env.REACT_APP_API_KEY        
                
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e204676eee7b9fc65ef49558cfc59cd3&units=metric`
       
        fetch(url)
        .then((response) => {
            if(response.ok){
                return response.json()
            }else{
                throw new Error('API CALL ERROR')
            }
        })
        .then( data => {           
            this.setState({data:data})    
        })
        .catch( error => {   
            console.log(error)        
            alert("Enter Correct city name")
            this.setState({data:""})
        })       
        
    }

    handleChange(event){
        const {name,value}=event.target
        this.setState({[name]:value})           
    }

    render(){              
       
        return(            
            <React.Fragment>                
                <form onSubmit={this.handleSubmit} className="form">
                    <input
                        className="input"
                        autoComplete="off"
                        type="text"
                        placeholder="City"
                        value={this.state.city}
                        name="city"
                        onChange={this.handleChange}
                    ></input>                  

                    <button className="button" type="submit">GET WEATHER</button>
                </form>                                
                {this.state.data?<Body {...this.state}/>:null}
            </React.Fragment>)
 
    }
}

export default Input