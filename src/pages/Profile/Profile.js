import { Link, NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import MyCars from './MyCars/MyCars';
import ProfileDetails from './ProfileDetails/ProfileDetails';

export default function Profile(props) {
	const { path, url } = useRouteMatch();

	return (
		<div className='card'>
			<div className='card-header'>
				<h2>Mój profil</h2>
			</div>
			<div className='card-body'>
				<ul className='nav nav-tabs'>
					<li className='nav-item'>
						<NavLink className='nav-link ' exact to={`${url}`}>
							Zmiana danych konta
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink className='nav-link ' to={`${url}/cars/add`}>
							Dodaj nowy samochód do bazy
						</NavLink>
					</li>
				</ul>
				<div className='pt-4'>
					<Switch>
						<Route path={`${path}/cars`} component={MyCars} />
						<Route path={`${path}`} component={ProfileDetails} />
					</Switch>
				</div>
			</div>
		</div>
	);
}
