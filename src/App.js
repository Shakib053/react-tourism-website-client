import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home';
import Destinations from './Components/Destinations/Destinations';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import AuthProvider from './context/AuthProvider';
import Login from './Components/Login/Login';
import MyOrders from './Components/MyOrders/MyOrders';
import ManageOrders from './Components/ManageOrders/ManageOrders';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import PlaceDetails from './Components/PlaceDetails.js/PlaceDetails';
import AddService from './Components/AddService/AddService';
function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/destinations'>
            <Destinations></Destinations>
          </Route>
          <Route path='/aboutus'>
            <AboutUs></AboutUs>
          </Route>
          <Route path='/contactus'>
            <ContactUs></ContactUs>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path="/placeDetails/:id">
            <PlaceDetails></PlaceDetails>
          </PrivateRoute>
          <Route path='/myorders'>
            <MyOrders></MyOrders>
          </Route>
          <Route path='/manageorders'>
            <ManageOrders></ManageOrders>
          </Route>
          <Route path='/addService'>
            <AddService></AddService>
          </Route>
          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>

  );
}

export default App;
