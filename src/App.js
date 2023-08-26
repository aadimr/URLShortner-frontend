import './App.css';
import LandingPage from './landingPage/LandingPage';
import Header from './header/Header';
import SignUP from './signUp/SignUp';
import LogIn from './logIn/LogIn';
import Home from './homePage/Home';
import Footer from './footer/Footer';
import ShowAndHide from './components/showAndHide/showAndHide';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ShowAndHide>
      <Header/>
      </ShowAndHide>
      <LandingPage/>
      <Routes>
        <Route path='/signUp' element={<SignUP/>}/>
        <Route path='/logIn' element={<LogIn/>}/>
        <Route path='/'  element={<Home/>}/>
      </Routes>
      <ShowAndHide>
      <Footer/>
      </ShowAndHide>
      </BrowserRouter>
    </div>
  );
}

export default App;
