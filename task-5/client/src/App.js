import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import LoginScreen from './screen/LoginScreen';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screen/HomeScreen';
import RegisterScreen from './screen/RegisterScreen';

function App() {
	return (
		<Router>
			<Header />
			<main className='py-3'>
				<Container>
					<Route path='/login' component={LoginScreen} />
					{/* <Route path='/product/:id' component={ProductScreen} /> */}
					<Route path='/register' component={RegisterScreen} />
					<Route path='/' component={HomeScreen} exact />
				</Container>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
