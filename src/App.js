import './App.css';
import LandingPage from './landingPage/LandingPage';
import Header from './header/Header';
import SingUP from './signUp/SignUp';
import LogIn from './logIn/LogIn';
import Home from './homePage/Home';
import Footer from './footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Header/> */}
      {/* <LandingPage/> */}
      {/* <Home/> */}
      <Routes>
        <Route path='/singUp' element={<SingUP/>}/>
        <Route path='/logIn' element={<LogIn/>}/>
        {/* <Route path='/home'  element={<Home/>}/> */}
      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
