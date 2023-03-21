import { useRef, useState } from 'react';
import Input from '../../../../../src/components/Input/Input';
import LoadingButton from '../../../../components/UI/LoadingButton/LoadingButton';
// import axios from '../../axios';
import { useHistory } from 'react-router-dom';
import axios from '../../../../axios';
import useAuth from '../../../../hooks/useAuth';

const AddCar = (props) => {
	const history = useHistory();
	const imageRef = useRef();
	const [form, setFrom] = useState({
		mark: '',
		model: '',
		price: 0,
		description: '',
		image: null,
	});

	const [loading, setLoading] = useState(false);
	const [auth] = useAuth();

	const submit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const res = await axios.post('/cars.json', {
				mark: form.mark,
				model: form.model,
				price: form.price,
				description: form.description,
				user_id: auth.userId
			});
			history.push('/profile/cars');
		} catch (ex) {
			console.log(ex.respone);
		}
	};

	const changeHandler = (value, fieldName) => {
		setFrom({
			...form,
			[fieldName]: {
				...form[fieldName],
				value,
				showError: true,
				error: 'Pole wymagane ',
			},
		});
	};

	return (
		<div className='card'>
			<div className='card-header'>Formularz dodania nowego samochodu</div>
			<div className='card-body'>
				<form onSubmit={submit}>
					<Input
						label='Marka'
						value={form.mark}
						onChange={(val) => setFrom({ ...form, mark: val })}
						error={form.mark.error}
						showError={form.mark.showError}
					/>

					<Input
						label='Model'
						value={form.model}
						onChange={(val) => setFrom({ ...form, model: val })}
						error={form.model.error}
						showError={form.model.showError}
					/>

					<div className='form-group'>
						<label>Cena za godzine</label>
						<input
							type='number'
							value={form.price}
							onChange={(val) => setFrom({ ...form, price: val.target.value })}
							className={`form-control ${
								form.price.error && form.price.showError
							} ? 'is-invalid' : ''
				                    }`}
						/>
						<div className='invalid-feedback'>{form.price.error}</div>
					</div>

					<div className='form-group'>
						<label>Opis</label>
						<textarea
							value={form.description}
							onChange={(val) =>
								setFrom({ ...form, description: val.target.value })
							}
							className={`form-control ${
								form.price.error && form.price.showError
							} ? 'is-invalid' : ''
				                    }`}
						/>
						<div className='invalid-feedback'>{form.price.error}</div>
					</div>

					<div className='form-group'>
						<label>Zdjęcia</label>
						<input
							type='file'
							ref={imageRef}
							onChange={(e) => setFrom({ ...form, image: e.target.value })}
						/>
					</div>

					<div className='text-right'>
						<LoadingButton
							loading={loading}
							className='btn-dark'
							label='Dodaj'
						/>
					</div>
				</form>
			</div>
		</div>
	);
};
export default AddCar;
