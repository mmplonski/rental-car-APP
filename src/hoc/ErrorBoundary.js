import { Component } from 'react';

class ErrorBoundry extends Component {
	state = {
		hasErrror: false,
	};

	static getDerivedStateFromError(error) {
		return { hasErrror: true };
	}

	componentDidCatch(error, errorInfo) {}

	render() {
		if (this.state.hasErrror) {
			return <h1 className='alert alert-danger'>Wystąpił poważny problem</h1>;
		}
		return this.props.children;
	}
}

export default ErrorBoundry;
