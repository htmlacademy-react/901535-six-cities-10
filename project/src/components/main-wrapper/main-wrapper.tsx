import MainEmptyScreen from '../../pages/main-empty-screen/main-empty-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import { Offer } from '../../types/offer';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../hooks/props-from-redux';

export type MainScreenProps = {
  offers: Offer[],
  selectedCity: string,
};

function MainWrapper({offers, selectedCity}: MainScreenProps): JSX.Element {
  const selectedCityOffers = offers.filter((offer) => offer.city.name === selectedCity);

  return selectedCityOffers.length ?
    <MainScreen
      offers={selectedCityOffers}
      selectedCity={selectedCity}
    /> :
    <MainEmptyScreen
      selectedCity={selectedCity}
    />;
}

export default connect(mapStateToProps)(MainWrapper);
