
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header1 from './components/Common/Header/Header1';
import Footer from './components/Common/Footer/Footer';

function App() {
  return (
    <>
      <Header1/>
      <Routes>
        <Route path='/' element={<Home/>}/>

      </Routes>

      <Footer/>

    </>
  );
}

export default App;
