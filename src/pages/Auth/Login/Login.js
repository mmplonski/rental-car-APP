import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoadingButton from '../../../components/UI/LoadingButton/LoadingButton';
import useAuth from '../../../hooks/useAuth';
import axios from '../../../axios-auth';

export default function Login(props) {
	const [auth, setAuth] = useAuth();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();
	const [loading, setLoading] = useState(false);
	const [valid, setValid] = useState(null);
	const [error, setError] = useState('');

	const submit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const res = await axios.post('accounts:signInWithPassword', {
				email,
				password,
				returnSecureToken: true,
			});
			console.log(res);
			setAuth({
				email: res.data.email,
				token: res.data.idToken,
				userId: res.data.localId,
			});
			history.push('/');
		} catch (ex) {
			console.log(ex.response);
			setError(ex.response.data.error.message);
			setLoading(false);
		}
	};

	if (auth) {
		history.push('/');
	}

	return (
		<div>
			{valid === false ? (
				<div className='alert alert-danger'>Niepoprawne dane logowania</div>
			) : null}

			<h2 className='text-light'>Logowanie</h2>
			<form onSubmit={submit}>
				<div className='form-group'>
					<label className='text-light'>Email</label>
					<input
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='form-control'></input>
				</div>
				<div className='form-group'>
					<label className='text-light'>Hasło</label>
					<input
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className='form-control'></input>
				</div>

				{error ? <div className='alert alert-danger'>{error}</div> : null}

				<LoadingButton
					className={'btn btn-outline-light'}
					loading={loading}
					label={'Zaloguj'}
				/>
			</form>
		</div>
	);
}
