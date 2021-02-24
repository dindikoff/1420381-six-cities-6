import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import {CITY_CORDS, CITIES} from '../../const';

import {OfferType} from '../../typings/offer';

import "leaflet/dist/leaflet.css";

const Map = ({currentCity, offers}) => {
  const mapRef = useRef();

  const icon = leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30]
  });

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: CITY_CORDS[currentCity.toLowerCase()],
      zoom: 12,
    });

    leaflet
  .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
    attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
  })
  .addTo(mapRef.current);

    return () => {
      mapRef.current.remove();
    };

  }, [currentCity]);


  useEffect(() => {
    offers.forEach((offer) => {
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
  }, [currentCity]);

  return (
    <section className="cities__map map">
      <div id="map" style={{height: `100%`}}></div>
    </section>
  );
};

Map.propTypes = {
  currentCity: PropTypes.oneOf(CITIES).isRequired,
  offers: PropTypes.arrayOf(OfferType).isRequired,
};

export default Map;
