import {Map} from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import mapStyle from '../../data/mapstyle.json';

function HomeMap() {
  return (
    <Map
        initialViewState={{
        longitude: 78.9629,  // Longitude for the center of India
        latitude: 20.5937,   // Latitude for the center of India
        zoom: 4              // Adjust zoom level to show India
      }}
      style={{width: "100%", height: "100dvh"}}
      mapStyle={mapStyle}
      light= {{"anchor": "viewport", "color": "white", "intensity": 0.4}}
    />
  );
}

export default HomeMap;