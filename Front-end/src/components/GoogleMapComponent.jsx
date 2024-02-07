import React, {useState, useEffect} from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import {
  setDefaults,
  fromAddress,

} from "react-geocode";

setDefaults({
  key: "AIzaSyD0_6JigNJB3Ly8n_T5EkcVKcY3CnnaXCQ", // Your API key here.
  language: "ja", // Default language for responses.
  region: "jp", // Default region for responses.
});



const libraries = ['places'];
const mapContainerStyle = {
  width: '500px',
  height: '360px',
};
// const center = {
//   lat: 7.2905715, // default latitude
//   lng: 80.6337262, // default longitude
// };

const GoogleMapComponent = (props) => {
  const newAddress = props.newAddress;
  const zoom = props.zoom;
  
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    if (newAddress && newAddress.length > 0) {
      const fetchMarkers = async () => {
        const newMarkers = await Promise.all(
          newAddress.map(async (address) => {
            const { results } = await fromAddress(address);
            const { lat, lng } = results[0].geometry.location;
            return { lat, lng };
          })
        );
        setMarkers(newMarkers);
      };
      fetchMarkers();
    }
  }, [newAddress]);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyD0_6JigNJB3Ly8n_T5EkcVKcY3CnnaXCQ', // Replace with your Google Maps API key
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={zoom}
        center={markers.length > 0 ? markers[0] : null}
      >
        {markers.map((marker, index) => (
          <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} />
        ))}
      </GoogleMap>
    </div>
  );
};
export default GoogleMapComponent;