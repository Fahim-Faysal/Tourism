import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddService from './AddService/AddService';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import AllOrders from './components/AllOrders/AllOrders';
import AuthProvider from './components/Context/AuthProvider';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MyOrders from './components/MyOrders/MyOrders';
import NotFound from './components/NotFound/NotFound';
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
            <Route path='/addservice'>
              <AddService></AddService>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/order/:id'>
              <Details></Details>
            </PrivateRoute>
            <PrivateRoute path='/orders'>
              <AllOrders></AllOrders>
            </PrivateRoute>
            <PrivateRoute path='/mybooking/:id'>
              <MyOrders></MyOrders>
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
