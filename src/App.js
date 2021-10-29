import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import AuthProvider from './components/Context/AuthProvider';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Package from './components/Package/Package';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/details/:id'>
              <Details></Details>
            </PrivateRoute>
            <Route path='/about'>
              <AboutUs></AboutUs>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
        <Footer></Footer>
      </AuthProvider>

    </div>
  );
}

export default App;
