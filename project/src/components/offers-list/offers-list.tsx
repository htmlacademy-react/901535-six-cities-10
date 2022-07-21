import { Offer } from '../../types/offer';
import MainActiveCard from '../main-active-card/main-active-card';

type OffersListProps = {
  offers: Offer[];
  handleActiveOfferSelect?: (offer: Offer | null) => void;
}

function OffersList({offers, handleActiveOfferSelect}: OffersListProps): JSX.Element {

  return (
    <>
      {offers.map((offer) => (
        <MainActiveCard
          offer={offer}
          key={offer.id}
          onOfferSelected={handleActiveOfferSelect}
        />
      ))}
    </>
  );
}

export default OffersList;
