import React from "react";
import { Map, Market, GoogleApiWrapper } from "google-maps-react";
import { useState, useEffect} from "react";


function RentalsMap(locations) {
  const [center, seCenter] = useState();
  useEffect(() => {
    var arr = Object.keys(locations);
    var getLat = (key) => locations[key]["lat"];
    var avgLat = arr.reduce((a, c) => a = Number(getLat(c)), 0) / arr.length;

    var getLng = (key) => locations[key]["lng"];
    var avgLng = arr.reduce((a, c) => a = Number(getLng(c)), 0) / arr.length;

    seCenter({lat:avgLat, lng:avgLng })
    
  }, [locations])

  return (
    <>
      <div>Map</div>
    </>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBtiJe6xqasylmoGptTGNVG-ORTBBUQKZc"
})
(RentalsMap);
