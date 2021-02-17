import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

import {OfferType} from '../../typings/offer';

import "leaflet/dist/leaflet.css";

const Map = ({cityCords, offers}) => {
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
    offers.forEach((offer) => {
      const icon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 30]
      });

      leaflet
        .marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        },
        {icon})
        .addTo(mapRef.current);

      return () => {
        mapRef.current.remove();
      };
    });
  }, []);

  return (
    <section className="cities__map map">
      <div id="map" style={{height: `100%`}}></div>
    </section>
  );
};

Map.propTypes = {
  cityCords: PropTypes.arrayOf(PropTypes.number).isRequired,
  offers: PropTypes.arrayOf(OfferType).isRequired,
};

export default Map;
