import { TypeOfferCard } from '../../const';
import { Offer } from '../../types/offer';
import PlaceCard from '../place-card';

function FavoriteCard({offer}:{offer: Offer}): JSX.Element {
  return (
    <article className="favorites__card place-card">
      <PlaceCard offer={offer} typeCard={TypeOfferCard.Favorite} />
    </article>
  );
}

export default FavoriteCard;
