import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import About from './pages/Home/Offers/Offers';

import Booking from './pages/Booking/Booking/Booking';
import Custompack from './pages/Custompack/Custompack';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import ManageTour from './pages/ManageTour/ManageTour';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import Offers from './pages/Home/Offers/Offers';
import UpdateTour from './pages/UpdateTour/UpdateTour';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/holyday">
              <Offers></Offers>
            </Route>
            <PrivateRoute path="/tourplan">
              <Custompack></Custompack>
            </PrivateRoute>
            <PrivateRoute path="/managetour">
              <ManageTour></ManageTour>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/updatetour/:id">
              <UpdateTour></UpdateTour>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
