import FavoriteCard from '../../components/favorite-card/favorite-card';
import HeaderPage from '../../components/header-page/header-page';
import Logo from '../../components/logo/logo';
import { AuthorizationStatus } from '../../const';
import { Offer } from '../../types/offer';

type FavoritesScreenProps = {
  offers: Offer[];
}

function FavoritesScreen({offers}: FavoritesScreenProps): JSX.Element {
  return (
    <div className="page">
      <HeaderPage authorizationStatus={AuthorizationStatus.Auth} />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#todo">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers.filter((offer) => offer.city.name === 'Amsterdam').map((offer) => <FavoriteCard offer={offer} key={offer.id} />)}
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#todo">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers.filter((offer) => offer.city.name === 'Cologne').map((offer) => <FavoriteCard offer={offer} key={offer.id} />)}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Logo/>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
