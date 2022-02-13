import React, { useState } from 'react';

const GetUserLocation = () => {
  
    const[center, setCenter] = useState();
    
      const geouccess = (position) => {
          const coords = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
          }
          setCenter(coords);
          
      };
      const geoError = (error) => {
        switch(error.code) {
          case error.TIMEOUT:
            console.log(error.message);
            break;
        }
      };
      const handleClick = () =>{
          navigator.geolocation.getCurrentPosition(geouccess, geoError, {enableHighAccuracy: true, maximumAge: 10000, timeout:5000});
      }
    return (
            <div>
                <button onClick={handleClick}> get Location</button>
            </div>
    )
}
 
export default GetUserLocation;