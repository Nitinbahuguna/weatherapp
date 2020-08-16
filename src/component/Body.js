import React from 'react'
import { WiThunderstorm } from "react-icons/wi";
import { WiDayShowers } from "react-icons/wi";
import { WiDayRain } from "react-icons/wi";
import { WiDaySnow } from "react-icons/wi";
import { WiDayFog } from "react-icons/wi";
import { WiDaySunny } from "react-icons/wi";
import { WiCloudy } from "react-icons/wi";
import "./css/body.css"


class Body extends React.Component{
    

    shouldComponentUpdate(prevProps ){   
       // console.log("should update"+this.props)        
        if(this.props.data!==prevProps.data)
        {              
            return true
        }
        return false
    }

    weatherIcon(icon){
        if(icon>=200&&icon<300)
        return <WiThunderstorm color='white' size='12rem'/>

        else if(icon>=300&&icon<400)
        return <WiDayShowers color='white' size='12rem'/>

        else if(icon>=500&&icon<600)
        return <WiDayRain color='white' size='12rem'/>

        else if(icon>=600&&icon<700)
        return <WiDaySnow color='white' size='12rem'/>

        else if(icon>=700&&icon<800)
        return <WiDayFog color='white' size='12rem'/>

        else if(icon==800)
        return <WiDaySunny color='white' size='12rem'/>

        else if(icon>800&&icon<=804)
        return <WiCloudy color='white' size='12rem'/>
    }

    render(){     
        let icon=this.props.data.weather[0].id
        let tem=Math.round(this.props.data.main.temp)
        let min=Math.round(this.props.data.main.temp_min)
        let max=Math.round(this.props.data.main.temp_max)
        let des=this.props.data.weather[0].description    
        
        return(        
        <div className="centerdiv">
            {console.log(this.props.data)}
            <h1>{this.props.city.toUpperCase()}</h1>      
            <p>{this.weatherIcon(icon)}</p> 
            <h2>{tem}&#8451;</h2>
            <h3>MIN:{min}&#8451; &emsp; MAX:{max}&#8451;</h3>           
            <h3>{des.toUpperCase()}</h3>                              
        </div>)
    }

}

export default Body