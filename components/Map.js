import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import "mapbox-gl/dist/mapbox-gl.css";

import ReactMapGL from "react-map-gl";

// mapbox-token=pk.eyJ1IjoiYWJoYXNvbmlhcyIsImEiOiJjbGRoOXFxdDcwNnZpM3Fta3JrY2tpejkzIn0.uW6jUAWj8aEiGntxjzCBdg
//style=mapbox://styles/abhasonias/cldh9vvr6000o01o4g2q4yryv
//access-token=pk.eyJ1IjoiYWJoYXNvbmlhcyIsImEiOiJjbGRoOXFxdDcwNnZpM3Fta3JrY2tpejkzIn0.uW6jUAWj8aEiGntxjzCBdg

const Maps = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  console.log(coordinates);

  const center = getCenter(coordinates);
  console.log(center);

  const [viewport, setViewport] = useState({
    zoom: 11,
    latitude: center.latitude,
    longitude: center.longitude,
    //pitch: 55, // pitch in degrees
    //bearing: -50, // bearing in degrees
    width: "100%",
    height: "100%",
  });

  console.log(selectedLocation);

  return (
    <div>
      <Map
        mapStyle="mapbox://styles/abhasonias/cldh9vvr6000o01o4g2q4yryv"
        mapboxAccessToken={process.env.mapbox_key}
        initialViewState={{ ...viewport }}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        {searchResults?.map((result) => (
          <div key={result.long}>
            <Marker
              latitude={result.lat}
              longitude={result.long}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <p
                onClick={() => setSelectedLocation(result)}
                className="cursor-pointer text-2xl animate-bounce"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ff0000"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </p>
            </Marker>
          </div>
        ))}
      </Map>
    </div>
  );
};

export default Maps;
