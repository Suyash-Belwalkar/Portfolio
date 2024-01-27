import './App.css';
import{Routes,Route} from 'react-router-dom';
import Home from './containers/home1';
import About from './containers/about';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import Resume from './containers/resume';
import Skills from './containers/skills';

function App() {
  return (
    <div className="App">
      {/*particle js*/}

      {/* navBar */}

      {/* main page content*/}

      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/contact' element={<Contact/>}/>
        <Route  path='/portfolio' element={<Portfolio/>}/>
        <Route  path='/resume' element={<Resume/>}/>
        <Route  path='/skills' element={<Skills/>}/>
      </Routes>
    </div>
  );
}

export default App;
