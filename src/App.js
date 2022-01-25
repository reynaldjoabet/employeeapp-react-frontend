
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
 import HeaderComponent from './components/HeaderComponent';
import FooterComponent  from './components/FooterComponent';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
function App() {
  return (
    <div>
      <Router>

        <HeaderComponent></HeaderComponent>
      <div className="container">
        <Switch>
          <Route path='/' exact component={ListEmployeeComponent} ></Route>
          <Route path='/employees'  exact component={ListEmployeeComponent}></Route>
          <Route path='/addEmployee'  component={AddEmployeeComponent}></Route>
          <Route path='/updateEmployee/:employeeId'   component={UpdateEmployeeComponent  }></Route>
          <Route path='/viewEmployee/:employeeId'   component={ViewEmployeeComponent  }></Route>
      </Switch>
        </div>
     
     

    </Router>
    <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
