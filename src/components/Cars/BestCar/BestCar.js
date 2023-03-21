import { Link } from 'react-router-dom';
import styles from './BestCar.module.css';

const BestCar = (props) => {
	const bestCar = props.getCar();

	if (!bestCar) return null;

	return (
		<div className={`card bg-success text-white ${styles.container}`}>
			<div className='card-header'>Najlepsza oferta</div>
			<div className='card-body'>
				<div className='d-flex justify-content-between'>
					<div>
						<h4 className=''>{bestCar.mark}</h4>
						<h5 className=''>{bestCar.model}</h5>
						<p className=''>{bestCar.description}</p>
					</div>
					<p className='mr-5 lead'>Cena: {bestCar.price} zł</p>
				</div>
				{/* <a href='#' className='btn btn-sm btn-light'>
					Pokaż
				</a> */}
				<Link
					className={`btn btn-sm btn-light  mt-2 px-4 `}
					to={`/cars/${props.id}`}>
					Pokaż
				</Link>
			</div>
		</div>
	);
};

export default BestCar;
