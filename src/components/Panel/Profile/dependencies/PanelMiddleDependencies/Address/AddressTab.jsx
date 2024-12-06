import React, { useRef, useEffect, useState } from "react";
import { Map, View } from "ol";
import { Tile as TileLayer } from "ol/layer";
import { OSM } from "ol/source";
import { fromLonLat } from "ol/proj";
import "ol/ol.css";
import axios from "axios";

const AddressTab = () => {
  const mapRef = useRef();
  const [map, setMap] = useState(null);
  const [selectedPath, setSelectedPath] = useState([]);

  // Initialize the map
  useEffect(() => {
    const initialMap = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(), // OpenStreetMap tiles
        }),
      ],
      view: new View({
        center: fromLonLat([51.33425, 35.700393]), // Default center: Tehran
        zoom: 14, // Default zoom level
      }),
    });

    setMap(initialMap);

    // Cleanup on unmount
    return () => initialMap.setTarget(null);
  }, []);

  // Add click event listener for selecting points
  useEffect(() => {
    if (!map) return;

    const handleMapClick = (event) => {
      const clickedCoords = map.getCoordinateFromPixel(event.pixel);
      const [lon, lat] = clickedCoords;

      // Log the latitude and longitude
      console.log(`Latitude: ${lat.toFixed(6)}, Longitude: ${lon.toFixed(6)}`);

      // Add the clicked point to the path
      setSelectedPath((prevPath) => [
        ...prevPath,
        `${lat.toFixed(6)},${lon.toFixed(6)}`,
      ]);
    };

    map.on("click", handleMapClick);

    return () => {
      map.un("click", handleMapClick);
    };
  }, [map]);

  // Send selected path to Neshan API
  const handleSubmitPath = async () => {
    const pathString = selectedPath.join("|");

    try {
      const response = await axios.post(
        "https://api.neshan.org/v4/path", // Neshan API URL
        {
          path: pathString,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Api-Key": "web.8c1fdcc4e0bc4bab838af4dd61379dea", // Secure API key
          },
        }
      );

      console.log("Snapped Path:", response.data);
      alert("Path successfully snapped! Check console for details.");
    } catch (error) {
      console.error("Error sending path to Neshan API:", error);
      alert("Failed to send path. Check console for error details.");
    }
  };

  return (
    <div>
      <div
        ref={mapRef}
        style={{
          width: "90%",
          height: "500px",
          margin: "0 auto",
          marginBottom: "20px",
          borderRadius: "12px", // Add border-radius to the map container
          overflow: "hidden", // Ensures the corners are clipped properly
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Optional: Adds a slight shadow for better appearance
        }}
      ></div>
    </div>
  );
};

export default AddressTab;
