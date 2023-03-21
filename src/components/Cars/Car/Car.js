import PropTypes from 'prop-types';
import styles from './Car.module.css';
import carImg from '../../../assets/images/car2.png';
import ThemeContext from '../../../context/themeContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const propTypes = {
	mark: PropTypes.string.isRequired,
	model: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	description: PropTypes.string.isRequired,
};

function Car(props) {
	const theme = useContext(ThemeContext);

	return (
		
		<div className={`card ${styles.car}`}>
			<div className='card-body'>
				<div className='row'>
					<div className='col-4'>
						<img src={carImg} alt='' className='img-fluid img-thumbnail' />
					</div>
					<div className='col-8'>
						<div className='row'>
							<div className='col'>
								<p className={styles.title}>{props.mark}</p>
								<span className='badge badge-dark '>{props.model}</span>
							</div>
							<div className='col text-right'>
								<h5 className='text-white'>Cena: {props.price}zł</h5>
								{/* <a href='#' className={`btn btn-${theme.color} mt-2 px-4`}>
									Pokaż
								</a> */}
								<Link
									className={`btn btn-${theme.color} mt-2 px-4`}
									to={`/cars/${props.id}`}>
									Pokaż
								</Link>
							</div>
						</div>
					</div>

					<div className='col-12'>
						<p className={styles.description}>{props.description}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

Car.propTypes = propTypes;

export default Car;
