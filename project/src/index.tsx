import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Settings = {
  OFFER_COUNT: 317,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      offerCount={Settings.OFFER_COUNT}
    />
  </React.StrictMode>,
);
