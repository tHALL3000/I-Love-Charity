import './App.css';
import React from 'react';
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

function App() {

  const [donation, setDonation] = React.useState(opps[0]);

  const donatePuppy = () => {
    setDonation(opps[0]);
  }

  const donateMassage = () => {
    setDonation(opps[1]);
  }

  const donateChildcare = () => {
    setDonation(opps[2]);
  }
 
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Hero />
          <Opportunities opps={opps}
            donatePuppy={donatePuppy}
            donateMassage={donateMassage}
            donateChildcare={donateChildcare} />
        </Route>
        <Route path='/donate'>
          <DonationsPage donation={donation}/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );

}

export default App;
