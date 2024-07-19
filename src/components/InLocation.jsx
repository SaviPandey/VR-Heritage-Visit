import React,{useRef,useState} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Box,TextField,Button } from '@mui/material'
import { useEffect } from 'react'
// import ReactMapGL from 'react-map-gl'
// import 'https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css'
// import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import './css/location.css'
import { Marker} from 'react-maplibre-gl'
import { useValue } from '../App'

const Location = () => {
    // const Map = ReactMapboxGl({
    //   accessToken:
    //     'pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A'
    // });
const{state:{location:{lng,lat}} , dispatch} = useValue();
const mapContainer = useRef(null)
const markerRef = useRef(null);
const [viewState, setViewState] = useState({
    center:[lng,lat],
    zoom:5,
    pitch:50
})


const [searchText, setSearchText] = useState('');



useEffect(() => {
const map = new maplibregl.Map({
    container: mapContainer.current,
    style: 'https://tiles.basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
    ...viewState

})

markerRef.current = new maplibregl.Marker({ draggable: true })
.setLngLat([lng,lat]) // set marker coordinates
.addTo(map);

markerRef.current.on('dragend', function(e) {
  // dispatch({type:'Update_location' , payload:{lng:e.lngLat.lng,lat:e.lngLat.lat}})
  console.log("Marker drag ended");
  // if (e.lngLat) {
  //   const { lng, lat } = e.lngLat;
  // console.log("Marker dragged to:", lng, lat);
  // dispatch({ type: 'Update_location', payload: { lng, lat } });
  // console.log("Marker moved to : ",lng,lat)
  const { lng, lat } = e.target.getLngLat();
  console.log("Marker dragged to:", lng, lat);
  dispatch({ type: 'Update_location', payload: { lng, lat } });
  console.log("After dispatch - State:", lng, lat);
});


map.addControl(new maplibregl.ScaleControl(),'bottom-right')
map.addControl(new maplibregl.FullscreenControl(),'bottom-right')
map.addControl(new maplibregl.NavigationControl(),'bottom-right')
map.addControl(new maplibregl.GeolocateControl(), 'bottom-right')
map.on('geolocate', function(e) {
  console.log("Geolocated coordinates:", lng, lat);
  dispatch({ type: 'Update_location', payload: { lng:e.coords.longitute,lat:e.coords.latitude } });
});

return () => {
    map.remove();
}
}, [viewState] )

const handleSearch = () => {
    // Implement search functionality here
    // For example, you can use a geocoding service like OpenStreetMap Nominatim
    // Here's a simple example using Nominatim
    fetch(`https://nominatim.openstreetmap.org/search?q=${searchText}&format=json`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          const result = data[0];
          dispatch({ type: 'Update_location', payload: { lng: parseFloat(result.lon), lat: parseFloat(result.lat) } });
          console.log("after search updated locations : ",lng ,lat)
          setViewState({
            center: [parseFloat(result.lon), parseFloat(result.lat)],
            zoom: 10,
            pitch: 50,
          });
        }
      })
      .catch((error) => {
        console.error('Error searching location:', error);
      });
  };

  return (
    <>
    <div className='Map-location' ref={mapContainer}>
        <Box 
        sx={{
            height:400,
            position:'relative'
        }}>
    {/* <ReactMapGL 
    mapboxAccessToken='pk.eyJ1Ijoiam9obmRvZTJlbWFpbCIsImEi0iJja3o30G9tY3owMXZvMnBycDM5bzBwNXlyIn0.a0v4orDUMi0PK_qk9UqaCw'
    mapStyle='mapbox://styles/mapbox/streets-v11'
    ></ReactMapGL> */}
{/* <Map
  style="mapbox://styles/mapbox/streets-v9"
  containerStyle={{
    height: '100vh',
    width: '100vw'
  }}
>
  <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
    <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
  </Layer>
</Map>; */}


<div className='Search-container' style={{ position: 'absolute', top: 10, left: 10, zIndex: 999 }}>
            <TextField
              className='Search-location'
              variant='outlined'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)
            }
            />
            <Button className='Search-button' variant='contained' onClick={handleSearch} style={{ marginLeft: 10 }}>
              Search
            </Button>
          </div>
          {/* {lat !== 0 && lng !== 0 &&(
          <Marker 
          map={map}
latitude={lat}
longitude={lng}
draggable
onDragEnd={(e) => dispatchEvent({type:'Update_location',payload:{lng:e.lngLat.lng,lat:e.lngLat.lat}})}/>
          )} */}
        </Box>
    </div>
   
    </>
  )
}
export default Location;