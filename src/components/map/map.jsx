import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import {CITY_CORDS, CITIES} from '../../const';

import {OfferType} from '../../typings/offer';

import "leaflet/dist/leaflet.css";

const PIN_IMAGE = {
  inactive: `img/pin.svg`,
  active: `img/pin-active.svg`
};

const Map = ({currentCity, offers, activeCardId}) => {
  const mapRef = useRef();
  const leafletMapRef = useRef();
  const markerLayers = useRef([]);

  const icon = leaflet.icon({
    iconUrl: PIN_IMAGE.inactive,
    iconSize: [30, 30]
  });

  const iconActive = leaflet.icon({
    iconUrl: PIN_IMAGE.active,
    iconSize: [30, 30]
  });

  const iconActive = leaflet.icon({
    iconUrl: `img/pin-active.svg`,
    iconSize: [30, 30]
  });

  useEffect(() => {
    leafletMapRef.current = leaflet.map(mapRef.current, {
      center: CITY_CORDS[currentCity],
      zoom: 12,
    });

    leaflet
  .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
    attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
  })
  .addTo(leafletMapRef.current);

    return () => {
      leafletMapRef.current.remove();
    };

  }, []);

  useEffect(() => {
    leafletMapRef.current.setView(CITY_CORDS[currentCity], 12);
  }, [currentCity]);

  useEffect(() => {
    markerLayers.current.forEach((markerLayer) => markerLayer.remove());
    markerLayers.current = [];
    offers.forEach((offer) => {
      const markerLayer = leaflet
        .marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        },
        {icon})
        .addTo(leafletMapRef.current);

      markerLayers.current.push(markerLayer);

    });
  }, [offers]);

  useEffect(() => {
    const newActiveOffer = offers.find((offer) => offer.id === activeCardId);

    markerLayers.current.forEach((markerLayer) => {
      const {lat, lng} = markerLayer.getLatLng();
      const {iconUrl} = markerLayer.getIcon().options;

      if (iconUrl === PIN_IMAGE.active) {
        markerLayer.setIcon(icon);
      }

      if (newActiveOffer && newActiveOffer.location.latitude === lat && newActiveOffer.location.longitude === lng) {
        markerLayer.setIcon(iconActive);
      }
    });

  }, [activeCardId]);

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
