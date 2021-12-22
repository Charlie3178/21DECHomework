import React from "react";


export default function() {
    return (
        this.liveTime = setInterval(() => {
            this.setState({
              currentTime: String(new Date())
            });
          }, 1000)
    )
        
    
}