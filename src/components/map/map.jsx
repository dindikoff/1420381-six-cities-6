import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

import {LocationType} from '../../typings/offer';

import "leaflet/dist/leaflet.css";

const Map = ({cityCords, points}) => {
  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: cityCords,
      zoom: 12,
      zoomControl: false,
      marker: true
    });

    leaflet
  .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
    attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
  })
  .addTo(mapRef.current);

    points.forEach((point) => {
      const icon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 30]
      });

      leaflet
        .marker({
          lat: point.latitude,
          lng: point.longitude
        },
        {icon})
        .addTo(mapRef.current);

      return () => {
        mapRef.current.remove();
      };
    });
  }, []);

  return (
    <div id="map" style={{height: `100%`}} ref={mapRef}></div>
  );
};

Map.propTypes = {
  cityCords: PropTypes.array.isRequired,
  points: PropTypes.arrayOf(LocationType).isRequired,
};

export default Map;
