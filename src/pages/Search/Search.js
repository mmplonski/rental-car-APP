import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../axios';
import Cars from '../../components/Cars/Cars';
import { objectToArrayWithId } from '../../helpers/objects';

export default function (props) {
	const { term } = useParams();
	const [cars, setCars] = useState([]);
	const search = async () => {
		try {
			const res = await axios.get('/cars.json');
			const newCars = objectToArrayWithId(res.data).filter(car => car.mark.includes(term))
			setCars(newCars);
		} catch (ex) {
			console.log(ex.response);
		}
	};

	useEffect(() => {
		search();
	}, [term]);
	return (
		<div>
			<h2 className='text-white'>Wyniki wyszukiwania dla frazy "{term}"</h2>
			<Cars cars={cars} />
		</div>
	);
}
