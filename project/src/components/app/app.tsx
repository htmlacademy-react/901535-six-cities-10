import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Offer, Comment } from '../../types/offer';
import Error from '../../error';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  offers: Offer[];
  comments: Comment[],
  authorizationStatus: AuthorizationStatus,
  city: string,
};

function App({offers, comments, authorizationStatus, city}: AppScreenProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainScreen
              offers={offers}
              authorizationStatus={authorizationStatus}
              selectedCity={city}
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
              neighbours={offers.slice(1,4)}
              authorizationStatus={authorizationStatus}
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

export default App;
