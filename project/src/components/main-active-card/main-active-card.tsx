import PlaceCard from '../place-card';
import { Offer } from '../../types/offer';
import { TypeOfferCard } from '../../const';

type MainActiveCardProps = {
  offer: Offer,
  onOfferSelected: (offer: Offer) => void,
  onOfferNonSelected: () => void,
}

function MainActiveCard({offer, onOfferSelected, onOfferNonSelected}: MainActiveCardProps): JSX.Element {
  return (
    <article className="cities__place-card place-card"
      onMouseEnter={() => onOfferSelected(offer)}
      onMouseLeave={() => onOfferNonSelected()}
    >
      <PlaceCard offer={offer} typeCard={TypeOfferCard.Main} />
    </article>
  );
}

export default MainActiveCard;
