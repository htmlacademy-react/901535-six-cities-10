import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import Error from '../../error';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  offerCount: number;
};

function App({offerCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen offerCount={offerCount}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={<FavoritesScreen/>}
        />
        <Route
          path={AppRoute.Room}
          element={<Error/>}
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
