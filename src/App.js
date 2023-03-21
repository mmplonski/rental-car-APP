import {
	lazy,
	Suspense,
	useCallback,
	useEffect,
	useReducer,
	useState,
} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Searchbar from './components/UI/Searchbar/Searchbar';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import ThemeButton from './components/UI/ThemeButton/ThemeButton';
import ThemeContext from './context/themeContext';
import AuthContext from './context/authContext';
import CustomerOpinion from './components/CustomerOpinion/CustomerOpinion';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { reducer, initialState } from './reducer';
import Home from './pages/Home/Home';
import ReducerContext from './context/reducerContext';
import Car from './pages/Car/Car';
import Search from './pages/Search/Search';
import NotFound from './pages/404/404';
import Login from './pages/Auth/Login/Login';
import AuthenticatedRoute from './hoc/AuthenticatedRoute';
import ErrorBoundary from './hoc/ErrorBoundary';
import useWebsiteTitle from './hoc/useWebsiteTitle';
import AddCar from './pages/Profile/MyCars/AddCar/AddCar';
import Register from './pages/Auth/Register/Register';
const Profile = lazy(() => import('./pages/Profile/Profile'));

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	useWebsiteTitle('Strona głowna');

	const changeTheme = () => {
		dispatch({ type: 'change-theme' });
	};

	const header = (
		<Header>
			<CustomerOpinion />
			<Searchbar />
			<ThemeButton />
		</Header>
	);
	const content = (
		<div>
			<ErrorBoundary>
				<Suspense fallback={<p>Ładowanie</p>}>
					<Switch>
						<AuthenticatedRoute path='/profile/cars/add' component={AddCar} />
						<AuthenticatedRoute path='/profile' component={Profile} />
						<Route path='/cars/:id' component={Car} />
						<Route path='/search/:term?' component={Search} />
						<Route path='/login' component={Login} />
						<Route path='/register' component={Register} />
						<Route exact path='/' component={Home} />
						<Route exact component={NotFound} />
					</Switch>
				</Suspense>
			</ErrorBoundary>
		</div>
	);
	const menu = <Menu />;
	const footer = <Footer />;

	return (
		<Router>
			<AuthContext.Provider
				value={{
					user: state.user,
					login: (user) => dispatch({ type: 'login', user }),
					logout: () => dispatch({ type: 'logout' }),
				}}>
				<ThemeContext.Provider
					value={{
						color: state.theme,
						changeTheme: changeTheme,
					}}>
					<ReducerContext.Provider
						value={{
							state: state,
							dispatch: dispatch,
						}}>
						<div style={{ backgroundColor: state.backgroundTheme }}>
							<Layout
								header={header}
								menu={menu}
								content={content}
								footer={footer}
							/>
						</div>
					</ReducerContext.Provider>
				</ThemeContext.Provider>
			</AuthContext.Provider>
		</Router>
	);
}

export default App;
