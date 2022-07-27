import { connect, ConnectedProps } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Offer, Comment } from '../../types/offer';
import { State } from '../../store/reducer';
import Error from '../../error';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import PrivateRoute from '../private-route/private-route';
import MainWrapper from '../main-wrapper/main-wrapper';

type AppScreenProps = {
  offers: Offer[];
  comments: Comment[],
};

const mapStateToProps = ({currentCity}: State) => ({currentCity});
const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App({offers, comments, currentCity}: AppScreenProps & PropsFromRedux): JSX.Element {
  const filteredCards = offers.filter((card) => card.city.name === currentCity);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainWrapper
              offers={filteredCards}
            />
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavoritesScreen
                offers={offers}
              />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Property}
          element={
            <PropertyScreen
              offers={offers}
              comments={comments}
            />
          }
        />
        <Route
          path={AppRoute.Error}
          element={<Error/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default connector(App);
