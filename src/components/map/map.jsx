import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import {CITY_CORDS, CITIES} from '../../const';

import {OfferType} from '../../typings/offer';

import "leaflet/dist/leaflet.css";

const Map = ({currentCity, offers, activeCardId}) => {
  const mapRef = useRef();

  const iconDisabled = leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30]
  });

  const iconActive = leaflet.icon({
    iconUrl: `img/pin-active.svg`,
    iconSize: [30, 30]
  });

  useEffect(() => {
    const map = leaflet.map(mapRef.current, {
      center: CITY_CORDS[currentCity],
      zoom: 12,
    });

    leaflet
  .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
    attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
  })
  .addTo(map);

    offers.forEach((offer) => {
      leaflet
        .marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        },
        {icon: offer.id === activeCardId ? iconActive : iconDisabled})
        .addTo(map);
    });

    return () => {
      map.remove();
    };

  }, [currentCity, activeCardId]);

  return (
    <div id="map" style={{height: `100%`}} ref={mapRef}></div>
  );
};

Map.propTypes = {
  currentCity: PropTypes.oneOf(CITIES).isRequired,
  offers: PropTypes.arrayOf(OfferType).isRequired,
  activeCardId: PropTypes.number
};

export default Map;
