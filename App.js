import { useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
import { ResumeProvider } from './Context';
import './App.css';
import Header from './components/Layouts/Header';
import Navbar from './components/Layouts/Navbar';
import Footer from './components/Layouts/Footer';
import Main from './components/Main';
import WebFont from 'webfontloader';

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Pacifico', 'Poppins']
      }
    });
  }, []);

  return (
    <>
      <ResumeProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Header/>}/>
          <Route path='builder' element={<Main/>}/>
          {/* <Route path='templates' element={}/> */}
          <Route path='about' element={<>an about page</>}/>
        </Routes>
        <Footer />
      </ResumeProvider>
    </>
  );
}

export default App;
