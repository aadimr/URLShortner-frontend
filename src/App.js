import './App.css';
import LandingPage from './landingPage/LandingPage';
import Header from './header/Header';
import SingUP from './singUp/SingUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <LandingPage/>
      <Routes>
        <Route path='/singUp' element={<SingUP/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
