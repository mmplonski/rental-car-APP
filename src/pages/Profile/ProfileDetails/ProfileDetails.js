import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoadingButton from '../../../components/UI/LoadingButton/LoadingButton';
import useAuth from '../../../hooks/useAuth';
import { validateEmail } from '../../../helpers/validation';
import axios from '../../../axios-auth';
export default function ProfileDetails(props) {
	const [auth, setAuth] = useAuth();
	const [email, setEmail] = useState(auth.email);
	const [password, setPassword] = useState('');
	const history = useHistory();
	const [loading, setLoading] = useState(false);
	const [valid, setValid] = useState(null);
	const [errors, setErrors] = useState({
		email: '',
		password: '',
	});
	const [succes, setSucces] = useState(false);
	const buttonDisabled = Object.values(errors).filter((x) => x).length;

	const submit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const data = {
				idToken: auth.token,
				email: email,
				returnSecureToken: true,
			};

			if (password) {
				data.password = password;
			}
			const res = await axios.post('accounts:update', data);

			setSucces(true);

			setAuth({
				email: res.data.email,
				token: res.data.idToken,
				userId: res.data.localId,
			});
		} catch (ex) {
			console.log(ex.response);
		}
		setLoading(false);
	};

	useEffect(() => {
		if (validateEmail(email)) {
			setErrors({ ...errors, email: '' });
		} else {
			console.log('asd');
			setErrors({ ...errors, email: 'Niepoprawny email' });
		}
	}, [email]);

	useEffect(() => {
		if (password.length >= 4 || !password) {
			setErrors({ ...errors, password: '' });
		} else {
			setErrors({ ...errors, password: 'Wymagane 4 znaki' });
		}
	}, [password]);

	return (
		<div>
			{valid === false ? (
				<div className='alert alert-danger'>Niepoprawne dane logowania</div>
			) : null}

			<h2>Logowanie</h2>
			{succes ? <div className='alert alert-success'>Dane zapisano</div> : null}
			<form onSubmit={submit}>
				<div className='form-group'>
					<label>Email</label>
					<input
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className={`form-control ${
							errors.email ? 'is-invalid' : 'is-valid'
						} `}></input>
					<div className='valid-feedback'>Wszystko ok!</div>
					<div className='invalid-feedback'>Niepoprawny email</div>
				</div>
				<div className='form-group'>
					<label>Hasło</label>
					<input
						type='password'
						onChange={(e) => setPassword(e.target.value)}
						className={`form-control ${
							errors.password ? 'is-invalid' : ''
						} `}></input>
					<div className='invalid-feedback'>{errors.password}</div>
				</div>
				<LoadingButton
					loading={loading}
					label={'Zapisz'}
					disabled={buttonDisabled}
				/>
			</form>
		</div>
	);
}
