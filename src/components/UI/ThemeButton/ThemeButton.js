import { useContext } from 'react';
import ThemeContext from '../../../context/themeContext';
import styles from './ThemeButton.module.css';

const buttonStyles = {
	color: '#fff',
	border: 0,
	backgroundColor: 'transparent',
};

export default function ThemeButton(props) {
	const theme = useContext(ThemeContext);

	return (
		<button
			className={`${styles.myButton} ${styles.slice} `}
			onClick={theme.changeTheme}>
			Theme
		</button>
	);
}
