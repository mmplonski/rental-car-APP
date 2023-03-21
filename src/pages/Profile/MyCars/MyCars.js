import { Link, useRouteMatch } from 'react-router-dom';

export default function MyCars(props) {
	const { url } = useRouteMatch();
	return (
		<div>
			<p>Dodaj nowy samochód do bazy.</p>
			<Link to={`${url}/add`} className='btn btn btn-dark'>
				Dodaj
			</Link>
		</div>
	);
}
