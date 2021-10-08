import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Opportunities from './components/Opportunities';
import Projects from './components/Projects';
import GetHelpLink from './components/GetHelpLink';
import CompletionsList from './components/CompletionsList';
import Footer from './components/Footer';
import DonationsPage from './components/DonationsPage';
import { opps } from './utilities/opps';


  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/'>
          {/* <Hero /> */}
          <Opportunities opps={opps} />
        </Route>
        <Route path='/donate'>
          <DonationsPage />
        </Route>
      </Switch>
    </div>
  );

}

export default App;
