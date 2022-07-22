import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentAddForm from '../../components/comment-add-form/comment-add-form';
import FavoriteBtn from '../../components/favorite-btn/favorite-btn';
import HeaderPage from '../../components/header-page/header-page';
import Map from '../../components/map/map';
import OffersList from '../../components/offers-list/offers-list';
import ReviewsList from '../../components/review-list/review-list';
import { AuthorizationStatus, citiesCoordinates, FavoriteBtnProp } from '../../const';
import Error from '../../error';
import { Comment, Offer } from '../../types/offer';
import { createRating } from '../../utils/utils';

const center = citiesCoordinates.amsterdam;

function PropertyPicture({src}: {src: string}) {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={src} alt="studio" />
    </div>
  );
}

function FeatureInside({featureName}: {featureName: string}) {
  return <li className="property__inside-item">{featureName}</li>;
}

type OfferScreenProps = {
  offers: Offer[],
  comments: Comment[],
  neighbours: Offer[],
  authorizationStatus: string,
}

function PropertyScreen({offers, comments, neighbours, authorizationStatus}: OfferScreenProps): JSX.Element {
  const [, setActiveOfferCard] = useState<Offer | null>(null);

  const {id} = useParams();
  const exactOffer = offers.find((offer) => String(offer.id) === id);

  if (!exactOffer) {
    return <Error/>;
  }

  const {price, title, rating, type, host, description, maxAdults, bedrooms, goods, images, isFavorite, isPremium} = exactOffer;

  return (
    <div className="page">
      <HeaderPage authorizationStatus={authorizationStatus} />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image) => <PropertyPicture src={image} key={image} />)}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div> : ''}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <FavoriteBtn isFavorite={isFavorite} btn={FavoriteBtnProp.PROPERTY} />
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: createRating(rating)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((feature: string) => <FeatureInside featureName={feature} key={feature} />)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  <span className="property__user-status">
                    {host.isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                <ReviewsList comments={comments}/>
                {authorizationStatus === AuthorizationStatus.Auth ? <CommentAddForm /> : null}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map city={center} offers={neighbours} activeOfferCard={null}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList offers={neighbours} handleActiveOfferSelect={setActiveOfferCard} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PropertyScreen;
