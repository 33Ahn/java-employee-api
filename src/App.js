import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import { ListEmployeeComponent } from './components/ListEmployeeComponent';

function App() {
  return (
    <div>
      <Router>    
        <HeaderComponent />
        <div className= "container">
          <Routes>            
            <Route exact path = "/" element = { <ListEmployeeComponent />}></Route>
            <Route path = "/employees" element = { <ListEmployeeComponent />}></Route>
          </Routes>
        {/* <ListEmployeeComponent />  -- don't need it because Routes are added for it         */}
        </div>
        <FooterComponent /> 
      </Router>   
    </div>
  );
}

export default App;
