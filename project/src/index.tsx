import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { AuthorizationStatus, CITIES } from './const';
import { COMMENTS } from './mocks/comments';
import { offers } from './mocks/offers';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <App
      offers = {offers}
      comments = {COMMENTS}
      authorizationStatus = {AuthorizationStatus.Auth}
      city = {CITIES[3]}
    />
  </Provider>
);
