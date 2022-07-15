import { useState } from 'react';
import { Offer } from '../../types/offer';

type OffersListProps = {
  offers: Offer[];
}

function OffersList({offers}: OffersListProps): JSX.Element {
  const [, setActiveOfferCard] = useState<Offer | null>(null);

  return (
    <></>
  );
}

export default OffersList;
