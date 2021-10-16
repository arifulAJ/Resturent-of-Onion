
import { BrowserRouter as Router,Switch ,Route } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Pages/Log&sign/Login/Login';
import Signup from './Pages/Log&sign/Signup/Signup';
import NagavitionBar from './Pages/navigation/NagavitionBar';
import Home from './Pages/Header/Home';
import Notfound from './Pages/Notfound/Notfound';
import GetFood from './Pages/FoodContent/FoodGet/GetFood';
import FoodBody from './Pages/FoodContent/FoodBody';
import Lunch from './Pages/FoodContent/Lunch/Lunch';
import Dinner from './Pages/FoodContent/Dinner/Dinner';
import Footer from './Pages/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import Order from './Pages/FoodContent/OrderedFood/Order';
import PrivetRoute from './Pages/Log&sign/Login/Privetrout/PrivetRoute';




function App() {
  return (
    <div  style={{backgroundColor:'white'}}>
     <AuthProvider>
     <Router>
      <NagavitionBar></NagavitionBar>
      
    
        <Switch>
          <Route exact path='/'>
          <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
            <FoodBody></FoodBody>
          </Route>
          
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/signup'>
            <Signup></Signup>
          </Route>
          <Route path='/home'>
        
          </Route>
          <Route path='/breakfast'>
          <Home></Home>
          <FoodBody></FoodBody>
        <GetFood></GetFood>
          </Route>
          <Route path='/lunch'>
          <Home></Home>
          <FoodBody></FoodBody>
            <Lunch></Lunch>
          </Route>
          <Route path='/dinner'>
          <Home></Home>
          <FoodBody></FoodBody>
            <Dinner></Dinner>
          </Route>
          <PrivetRoute path="/order">
            <Order></Order>
          </PrivetRoute>
       <Route path='*'>
        <Notfound></Notfound>
       </Route>
        </Switch>
      
    <Footer></Footer>

      </Router>
     </AuthProvider>
      
     
     

    </div>
  );
}

export default App;
