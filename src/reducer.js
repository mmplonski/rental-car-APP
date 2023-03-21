export const reducer = (state, action) => {
	switch (action.type) {
		case 'change-theme':
			const theme =
				state.theme === 'btn btn-outline-light'
					? 'primary'
					: 'btn btn-outline-light';
			return { ...state, theme: theme };
		case 'change-theme-background':
			const backgroundTheme =
				state.backgroundTheme === '#2c3333' ? '#f4f1f1' : '#2c3333';
			return { ...state, backgroundTheme: backgroundTheme };
		case 'login':
			return { ...state, user: action.user };
		case 'logout':
			return { ...state, user: null };
	}
};

export const initialState = {
	cars: [],
	loading: true,
	user: JSON.parse(window.localStorage.getItem('token-data')) ?? null,
	theme: 'btn btn-outline-light',
	backgroundTheme: '#2c3333',
};
