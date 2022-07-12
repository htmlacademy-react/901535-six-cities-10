import { BrowserRouter, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  offerCount: number;
};

function App({offerCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Route
        path={AppRoute.Main}

      />
    </BrowserRouter>
    <MainScreen offerCount={offerCount}/>
  );
}

export default App;
