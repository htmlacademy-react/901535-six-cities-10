import MainEmptyScreen from '../../pages/main-empty-screen/main-empty-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import { Offer } from '../../types/offer';
import { State } from '../../store/reducer';
import { connect } from 'react-redux';

const mapStateToProps = ({city}: State) => ({selectedCity: city});

export type MainScreenProps = {
  offers: Offer[],
  authorizationStatus: string,
  selectedCity: string,
};

function MainWrapper({offers, authorizationStatus, selectedCity}: MainScreenProps): JSX.Element {
  const selectedCityOffers = offers.filter((offer) => offer.city.name === selectedCity);

  return selectedCityOffers.length ?
    <MainScreen
      offers={selectedCityOffers}
      authorizationStatus={authorizationStatus}
      selectedCity={selectedCity}
    /> :
    <MainEmptyScreen
      authorizationStatus={authorizationStatus}
      selectedCity={selectedCity}
    />
}

export default connect(mapStateToProps)(MainWrapper);
