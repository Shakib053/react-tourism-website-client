import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
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
import OrderTake from './Components/OrderTake/OrderTake';
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
          <PrivateRoute path='/takeOrders'>
            <OrderTake></OrderTake>
          </PrivateRoute>
          <PrivateRoute path='/myorders'>
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path='/manageorders'>
            <ManageOrders></ManageOrders>
          </PrivateRoute>
          <PrivateRoute path='/addService'>
            <AddService></AddService>
          </PrivateRoute>
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
