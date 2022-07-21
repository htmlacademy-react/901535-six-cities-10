import { Icon, Marker } from 'leaflet';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/use-map';
import { Offer, PointInMap } from '../../types/offer';

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

const activeIcon = getOfferIcon('./img/pin-active.svg');
const defaultIcon = getOfferIcon('./img/pin.svg');

function Map(props: MapProps): JSX.Element {
  const {city, offers, activeOfferCard} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const [lat, lng] = [offer.location.latitude, offer.location.longitude];
        const marker = new Marker({lat, lng});
        marker.setIcon(activeOfferCard !== null && activeOfferCard.id === offer.id ? activeIcon : defaultIcon);
        marker.addTo(map);
      });
    }
  }, [map, offers, activeOfferCard]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

export default Map;
