import { TypeOfferCard } from '../../const';
import { Offer } from '../../types/offer';
import PlaceCard from '../place-card';

type MainActiveCardProps = {
  offer: Offer,
  onOfferSelected?: (offer: Offer | null) => void,
}

function MainActiveCard({offer, onOfferSelected}: MainActiveCardProps): JSX.Element {

  const handleMouseEnter = () => {
    if (onOfferSelected) {
      onOfferSelected(offer);
    }
  };
  const handleMouseLeave = () => {
    if (onOfferSelected) {
      onOfferSelected(null);
    }
  };

  return (
    <article className="cities__place-card place-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <PlaceCard offer={offer} typeCard={TypeOfferCard.Main}/>
    </article>
  );
}

export default MainActiveCard;
