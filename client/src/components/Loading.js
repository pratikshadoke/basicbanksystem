import React from 'react'
import '../App.css'
import Lottie from 'react-lottie';
import * as location from '../1055-world-locations.json'
import * as success from '../17084-sucess-confetti.json'
function Loading() {
    const locationOptions = {
        loop: true,
        autoplay: true, 
        animationData: location.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }
      const successOptions = {
        loop: true,
        autoplay: true, 
        animationData: success.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (
        <>
        <div className="Loading">
        <p className="text-center text-white">Loading...</p>
            <Lottie  className="mybox" options={locationOptions}
              height={200}
              width={200} 
             />  
        </div>
        
        </>
    )
}

export default Loading
