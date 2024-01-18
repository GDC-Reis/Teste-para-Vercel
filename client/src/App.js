import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

//hooks
import { useState, useEffect} from 'react';
import { useAuthentication } from './hooks/useAuthentication';

//Pages
import Home from './pages/Home/Home'
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import About from './pages/About/About'
import Product from './pages/Product/product';

//Context
import { AuthProvider } from './context/AuthContext';

//Components
import Navbar from './components/Navbar'
import EsqueceuSenha from './components/EsqueceuSenha';

function App() {

  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if(loadingUser){
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      {/* <img /> */}
      {/* <h1>Mel Dourado</h1> */}
     <AuthProvider value={{user}}>
      <BrowserRouter>
      {/* <div></div>
        <h1>Mel Dourado</h1> */}
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/register' element={ !user ? <Register/> : <Navigate to="/home"/>}/>
            <Route path='/login' element={ !user ? <Login/> : <Navigate to="/home"/> }/>
            <Route path='/about' element={<About/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/esqueceuSenha' element={<EsqueceuSenha/>}/>
          </Routes>
        </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
