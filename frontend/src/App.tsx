import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Contacts from './pages/Contacts/Contacts';
import About from './pages/About/About';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Posts from './pages/Posts/Posts'

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/post/:id' element={<Posts/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
