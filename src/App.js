import './App.css';
import Header from './header/Header';
import SignUP from './signUp/SignUp';
import LogIn from './logIn/LogIn';
import Home from './homePage/Home';
import Footer from './footer/Footer';
import AllShortenedURL from './allShortenedURL/AllShortenedURL';
import ShowAndHide from './components/showAndHide/showAndHide';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateRoutes from './components/protectedRoute/ProtectedRoute';
import { PrivateRoutesForLogInAndSingUp } from './components/protectedRoute/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ShowAndHide>
          <Header />
        </ShowAndHide>
        <Routes>
          <Route element={<PrivateRoutesForLogInAndSingUp />}>
            <Route path='/signUp' element={<SignUP />} />
            <Route path='/logIn' element={<LogIn />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path='/' element={<Home />} />
            <Route path='/allShortenedURL' element={<AllShortenedURL />} />
          </Route>
        </Routes>
        <ShowAndHide>
          <Footer />
        </ShowAndHide>
      </BrowserRouter>
    </div>
  );
}

export default App;
