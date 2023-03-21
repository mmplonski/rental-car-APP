import { useCallback, useContext, useReducer, useState } from 'react';
import BestCar from '../../components/Cars/BestCar/BestCar';
import Cars from '../../components/Cars/Cars';
import { useEffect } from 'react';
import ReducerContext from '../../context/reducerContext';
import LoadingIcon from '../../components/UI/LoadingIcon/LoadingIcon';
import axios from '../../axios';
import { objectToArrayWithId } from '../../helpers/objects';

export default function Home() {
	const reducer = useContext(ReducerContext);

	const [loading, setLoading] = useState(true);
	const [cars, setCars] = useState([]);

	const getBestCar = useCallback(() => {
		if (cars.length < 2) {
			return null;
		} else {
			return cars.sort((a, b) => (a.price < b.price ? 1 : -1))[1];
		}
	}, [cars.length]);

	const fetchCars = async () => {
		try {
			const res = await axios.get('/cars.json');
			const newCars = objectToArrayWithId(res.data);
			setCars(newCars);
		} catch (ex) {
			console.log(ex.response);
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchCars();
	}, []);

	return loading ? (
		<LoadingIcon />
	) : (
		<>
			<BestCar getCar={getBestCar} />
			<Cars cars={cars} />
		</>
	);
}
