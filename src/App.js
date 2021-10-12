import { Navbar } from './components';
import Footer from './components/Footer/Footer'
import GlobalStyle from './globalStyles';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';

function App() {
  return (
    // BEM 
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
