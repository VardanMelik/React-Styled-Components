import { Navbar } from './components';
import GlobalStyle from './globalStyles';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route } from 'react-router-dom';

function App() {
  return (
    // BEM 
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Switch>

      </Switch>
    </Router>
  );
}

export default App;
