import React, { Component, useMemo } from 'react';
import PropTypes from 'prop-types';
import Car from './Car/Car';
import styles from './Cars.module.css';

const propTypes = {
	cars: PropTypes.array.isRequired,
};

const slowFunction = (count) => {
	return count;
};

function Cars(props) {
	const count = useMemo(() => {
		return slowFunction(props.cars.length);
	}, [props.cars.length]);
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Oferty: ({count})</h2>
			{props.cars.map((car) => (
				<Car key={car.id} {...car} />
			))}
		</div>
	);
}

Cars.propTypes = propTypes;

const areEqual = (prevProps, nextProps) => {
	return prevProps.cars === nextProps.cars;
};

// export default Cars;
export default React.memo(Cars, areEqual);
