import './App.css';
import SignUP from './signUp/SignUp';
import LogIn from './logIn/LogIn';
import Home from './homePage/Home';
import AllShortenedURL from './allShortenedURL/AllShortenedURL';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateRoutes from './components/protectedRoute/ProtectedRoute';
import { PrivateRoutesForLogInAndSingUp } from './components/protectedRoute/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
