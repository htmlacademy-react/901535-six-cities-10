import { CITIES } from '../const';
import { MouseEvent } from 'react';
import { connector, PropsFromRedux } from '../hooks/props-from-redux';

const ACTIVE = 'tabs__item tabs__item--active';

function Location({city, selectedCity, onClickCity}: {city: string} & PropsFromRedux): JSX.Element {
  const onClick = (evt: MouseEvent) => {
    evt.preventDefault();
    onClickCity(city);
  };

  return (
    <li className="locations__item">
      <a href='/' onClick={onClick} className={`locations__item-link tabs__item ${city === selectedCity ? ACTIVE : ''}`}>
        <span>{city}</span>
      </a>
    </li>
  );
}

const LocationPropsFromRedux = connector(Location);

function Locations(): JSX.Element {
  const allCities = CITIES.map((city) => <LocationPropsFromRedux city={city} key={city}/>);
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {allCities}
      </ul>
    </section>
  );
}

export default Locations;
