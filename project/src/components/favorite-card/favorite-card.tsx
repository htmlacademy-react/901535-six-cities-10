import { Offer } from '../../types/offer';
import PlaceCard from '../place-card';

const cardInfoStyle = 'favorites__card-info';
const cardWrapperStyle = 'favorites__image-wrapper';
const [cardImageWidth, cardImageHeight] = ['150', '110'];
const styleProps = {cardInfoStyle, cardWrapperStyle, cardImageWidth, cardImageHeight};

function FavoriteCard({offer}:{offer: Offer}): JSX.Element {
  return (
    <article className="favorites__card place-card">
      <PlaceCard offer={offer} {...styleProps} />
    </article>
  );
}

export default FavoriteCard;
