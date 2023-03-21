import axios from '../../axios';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingIcon from '../../components/UI/LoadingIcon/LoadingIcon';
import ReducerContext from '../../context/reducerContext';
import useWebsiteTitle from '../../hoc/useWebsiteTitle';

export default function Car(props) {
	const { id } = useParams();
	const [car, setCar] = useState(null);
	const [loading, setLoading] = useState(true);

	const setTitle = useWebsiteTitle();

	const fetchCar = async () => {
		try {
			const res = await axios.get(`/cars/${id}.json`);
			setCar(res.data);
			setTitle(res.data.mark);
		} catch (ex) {
			console.log(ex.response);
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchCar();
	}, []);

	console.log(car);
	// return loading ? <LoadingIcon /> : <h1 className='text-light'>{car.mark}</h1>;
	return loading ? <LoadingIcon /> : <h1 className='text-light'>{car.mark}</h1>;
}
