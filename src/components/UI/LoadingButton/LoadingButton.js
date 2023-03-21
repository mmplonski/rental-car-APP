function LoadingButton(props) {
	const className = props.className || 'btn btn-dark';

	return props.loading ? (
		<button className={`btn ${className}`} type='button' disabled>
			<span
				className='spinner-border spinner-border-sm'
				role='status'
				aria-hidden='true'></span>
			Ładowanie...
		</button>
	) : (
		<button {...props} className={`btn ${className}`}>
			{props.label}
		</button>
	);
}

export default LoadingButton;
