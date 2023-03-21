import { useState } from 'react';
import LoadingButton from '../../../components/UI/LoadingButton/LoadingButton';
import Input from '../../../components/Input/Input';
import { validate } from '../../../helpers/validation';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router-dom';
import axios from '../../../axios-auth';
export default function Register(props) {
	const history = useHistory();
	const [auth, setAuth] = useAuth();
	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState({
		email: {
			value: '',
			error: '',
			showError: false,
			rules: ['required', 'email'],
		},
		password: {
			value: '',
			error: '',
			showError: false,
			rules: ['required'],
		},
	});

	const [error, setError] = useState();

	const valid = !Object.values(form)
		.map((input) => input.error)
		.filter((error) => error).length;

	const submit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const res = await axios.post('accounts:signUp', {
				email: form.email.value,
				password: form.password.value,
				returnSecureToken: true,
			});
			console.log(res.data);

			setAuth({
				email: res.data.email,
				token: res.data.idToken,
				userId: res.data.localId,
			});
			history.push('/');
		} catch (ex) {
			setError(ex.response.data.error.message);
			console.log(ex.response);
		}

		setLoading(false);
	};

	const changeHandler = (value, fieldName) => {
		const error = validate(form[fieldName].rules, value);

		setForm({
			...form,
			[fieldName]: {
				...form[fieldName],
				value,
				showError: true,
				error: error,
			},
		});
	};

	if (auth) {
		history.push('/');
	}

	return (
		<div className='card'>
			<div className='card-header'>Rejestracja</div>
			<div className='card-body'>
				<p className='text-muted'>Uzupełnij dane</p>

				<form onSubmit={submit}>
					<Input
						label='Email'
						type='email'
						value={form.email.value}
						onChange={(val) => changeHandler(val, 'email')}
						error={form.email.error}
						showError={form.email.showError}
					/>

					<Input
						label='Hasło'
						type='password'
						value={form.password.value}
						onChange={(val) => changeHandler(val, 'password')}
						error={form.password.error}
						showError={form.password.showError}
					/>

					{error ? <div className='alert alert-danger'>{error}</div> : null}

					<div className='text-right'>
						<LoadingButton
							loading={loading}
							disabled={!valid}
							className='btn btn-dark'
							label='Zarejestruj'
						/>
					</div>
				</form>
			</div>
		</div>
	);
}
