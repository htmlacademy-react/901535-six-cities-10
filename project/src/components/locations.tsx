import { Link } from 'react-router-dom';
import { AppRoute, CITIES } from '../const';

const ACTIVE = 'tabs__item tabs__item--active';

function Location({city, selectedCity}: {city:string, selectedCity : string}): JSX.Element {
  return (
    <li className="locations__item">
      <Link className={`locations__item-link tabs__item ${city === selectedCity ? ACTIVE : ''}`} to={AppRoute.Main}>
        <span>{city}</span>
      </Link>
    </li>
  );
}

function Locations({selectedCity}: {selectedCity : string}): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => <Location city={city} selectedCity={selectedCity} key={city}/>)}
      </ul>
    </section>
  );
}

export default Locations;
