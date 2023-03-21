import React, { useContext } from 'react';
import style from './Menu.module.css';
import AuthContext from '../../context/authContext';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function Menu() {
	// const auth = useContext(AuthContext);
	const [auth, setAuth] = useAuth();

	const logout = (e) => {
		e.preventDefault();
		// auth.logout();
		setAuth(false);
	};

	return (
		<div className={`${style.menuContainer} breadcrumb`}>
			<ul className={`${style.menu}`}>
				<li className={`${style.menuItem}`}>
					<NavLink exact activeClassName={style.menuItemActive} to='/'>
						Home
					</NavLink>
				</li>
				{auth ? (
					<>
						<li className={style.menuItem}>
							<NavLink activeClassName={style.menuItemActive} to={'/profile'}>
								Mój profil
							</NavLink>
						</li>
						<li className={style.menuItem}>
							<a href='#' onClick={logout}>
								Wyloguj
							</a>
						</li>
						<li className={style.menuItem}>
							<NavLink activeClassName={style.menuItemActive} to={'/notFound'}>
								Not Found
							</NavLink>
						</li>
					</>
				) : (
					<>
						<li className={style.menuItem}>
							<NavLink activeClassName={style.menuItemActive} to={'/register'}>
								Rejestracja
							</NavLink>
						</li>
						<li className={style.menuItem}>
							<NavLink activeClassName={style.menuItemActive} to='/login'>
								Zaloguj
							</NavLink>
						</li>
						<li className={style.menuItem}>
							<NavLink activeClassName={style.menuItemActive} to={'/notFound'}>
								Not Found
							</NavLink>
						</li>
					</>
				)}
			</ul>
		</div>
	);
}

export default Menu;
