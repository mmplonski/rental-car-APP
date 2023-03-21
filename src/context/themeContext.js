import React from 'react';

const ThemeContext = React.createContext({
	color: 'primary',
	backgroundColor: '#2c3333',
	changeTheme: () => {},
});

ThemeContext.displayName = 'ThemeContext';

export default ThemeContext;
