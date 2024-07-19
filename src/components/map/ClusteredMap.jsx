import React,{useState} from 'react'
import { useValue } from '../../App'
import { useEffect } from 'react'
import { getPilgrims } from '../createPilgrim'
import { Box,Avatar,Paper,Tooltip } from '@mui/material'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import Map,{FullscreenControl, GeolocateControl, NavigationControl, ScaleControl,Marker, Popup} from 'react-map-gl'
import Supercluster from 'supercluster'
import './cluster.css'
// import GeocoderInput from '../sidebar/GeocoderInput'
import { GeocodingControl } from "@maptiler/geocoding-control/maplibregl";
import PopupPilgrim from './PopupPilgrim'




const supercluster = new Supercluster({
  radius: 75,
  maxZoom: 20,
});

const apiKey = "tRqjZjhKcJr1uachzPuM";

const ClusteredMap = () => {
const {state:{pilgrims} , dispatch, mapRef} = useValue()

const [points, setPoints] = useState([]);
const [clusters, setClusters] = useState([]);
const [bounds, setBounds] = useState([-180, -85, 180, 85]);
const [zoom, setZoom] = useState(0);
const [popupInfo, setPopupInfo] = useState(null);

useEffect(() => {
  getPilgrims(dispatch)
 },[])

useEffect(() => {
  const points = pilgrims.map((pilgrim) => ({
    type: 'Feature',
    properties: {
      cluster: false,
      pilgrimId: pilgrim._id,
      price: pilgrim.price,
      title: pilgrim.title,
      description: pilgrim.description,
      lng: pilgrim.lng,
      lat: pilgrim.lat,
      images: pilgrim.images,
      uPhoto: pilgrim.uPhoto,
      uName: pilgrim.uName,
    },
    geometry: {
      type: 'Point',
      coordinates: [parseFloat(pilgrim.lng), parseFloat(pilgrim.lat)],
    },
  }));
  setPoints(points);
 },[pilgrims]);

 useEffect(() => {
  supercluster.load(points);
  setClusters(supercluster.getClusters(bounds, zoom));
}, [points, zoom, bounds]);

useEffect(() => {
  if (mapRef.current) {
    setBounds(mapRef.current.getMap().getBounds().toArray().flat());
  }
}, [mapRef?.current]);


useEffect(() => {
  if (mapRef.current) {
    const map = mapRef.current.getMap();
    console.log("Map reference:", map);

    const geocodingControl = new GeocodingControl({ apiKey, maplibregl });
    console.log("Geocoding Control:", geocodingControl);

    map.addControl(geocodingControl);
    console.log("Added Geocoding Control to map.");
  }
}, [mapRef]);


  return (
    <Box>
    <Map mapLib={maplibregl}
    initialViewState={{
      longitude: 80,
      latitude: 25,
      zoom: 2,
    }}
    style={{width: "100%", height: " calc(100vh - 77px)"}}
    mapStyle='https://api.maptiler.com/maps/streets/style.json?key=tRqjZjhKcJr1uachzPuM'
    // mapStyle="https://api.maptiler.com/maps/streets/style.json?key=tRqjZjhKcJr1uachzPuM"
    // https://tiles.basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json{for black theme}
    ref={mapRef}
    onZoomEnd={(e) => setZoom(Math.round(e.viewState.zoom))}
    >
      <ScaleControl position='bottom-right' />
      <FullscreenControl position='bottom-right' />
      <NavigationControl position="bottom-right" />
      <GeolocateControl position='bottom-right' />


      {clusters.map((cluster) => {
        const { cluster: isCluster, point_count } = cluster.properties;
        const [longitude, latitude] = cluster.geometry.coordinates;
        if (isCluster) {
          return (
            <Marker
              key={`cluster-${cluster.id}`}
              longitude={longitude}
              latitude={latitude}
            >
              <div
                className="cluster-marker"
                style={{
                  width: `${10 + (point_count / points.length) * 20}px`,
                  height: `${10 + (point_count / points.length) * 20}px`,
                }}
                onClick={() => {
                  const zoom = Math.min(
                    supercluster.getClusterExpansionZoom(cluster.id),
                    20
                  );
                  mapRef.current.flyTo({
                    center: [longitude, latitude],
                    zoom,
                    speed: 1,
                  });
                }}
              >
                {point_count}
              </div>
            </Marker>
          );
        }

        return (
          <Marker
            key={`pilgrim-${cluster.properties.roomId}`}
            longitude={longitude}
            latitude={latitude}
          >
            <Tooltip title={cluster.properties.title}>
              <Avatar
                src={cluster.properties.images}
                component={Paper}
                elevation={2}
                onClick={() => setPopupInfo(cluster.properties)}
              />
            </Tooltip>
          </Marker>
        );
      })}
      {/* <GeocoderInput /> */}
      {popupInfo && (
        <Popup
          longitude={popupInfo.lng}
          latitude={popupInfo.lat}
          maxWidth="auto"
          closeOnClick={false}
          focusAfterOpen={false}
          onClose={() => setPopupInfo(null)}
        >
          <PopupPilgrim {...{ popupInfo }} />
        </Popup>
      )}

    </Map>
    </Box>
  )
}

export default ClusteredMap