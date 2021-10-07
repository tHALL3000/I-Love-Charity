import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Opportunities from './components/Opportunities';
import Projects from './components/Projects'
import GetHelpLink from './components/GetHelpLink';
import CompletionsList from './components/CompletionsList';
import Footer from './components/Footer';
import { opps } from './utilities/opps';

function App() {

  // uncomment each component as you prepare it to see it on the page, if you uncomment all
  // the page won't load
  // to see what the page looks like type "npm run dev" into the bash terminal

  return (
    <div>
      <Header />
      {/* <Hero /> */}
      <Opportunities opps={opps}/>
      {/* <Projects />
      <GetHelpLink />
      <CompletionsList />
      <Footer /> */}
    </div>
  );
}

export default App;
