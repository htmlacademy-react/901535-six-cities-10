import { Icon, LayerGroup, Marker } from 'leaflet';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/use-map';
import { Offer, PointInMap } from '../../types/offer';
import { IconMapColour } from '../../const';

import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: PointInMap,
  offers: Offer[],
  activeOfferCard: Offer | null,
}

const getOfferIcon = (iconUrl: string) => new Icon(
  {
    iconUrl,
    iconSize: [30, 40],
    iconAnchor: [15, 40],
  }
);

const activeIcon = getOfferIcon(IconMapColour.Active);
const defaultIcon = getOfferIcon(IconMapColour.Default);

function Map(props: MapProps): JSX.Element {
  const {city, offers, activeOfferCard} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const markerGroup = new LayerGroup();

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const [lat, lng] = [offer.location.latitude, offer.location.longitude];
        const marker = new Marker({lat, lng});
        marker.setIcon(activeOfferCard !== null && activeOfferCard.id === offer.id ? activeIcon : defaultIcon);
        marker.addTo(map);
      });
      markerGroup.addTo(map);
    }

    return () => {
      markerGroup.remove();
    };
  });

  useEffect(() => {
    map?.setView(city);
  }, [city, map]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

export default Map;
