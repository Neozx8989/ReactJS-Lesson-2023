import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import AccordionFunc from './component/Accordion';
import Index from './component/Index';
import AboutPage from './component/AboutPage'
import HomePage from './component/HomePage';
import MoviesFunc from './component/Movies';
import MovieFunc from './component/Movie';
import GalleryPage from './component/Gallery';
import ToasterPage from './component/ToasterPage';

function App() {
  return (
    <div className='App'>
      <Routes>  
        <Route path={'/'} element={<Index/>}/>
        <Route path={'accordion'} element={<AccordionFunc/>}/>
        <Route path={'home'} element={<HomePage/>}/>
        <Route path={'about'} element={<AboutPage/>}/>
        <Route path={'moviesfunc'} element={<MoviesFunc/>}/>
        <Route path={'/moviefunc/:id'} element={<MovieFunc/>}/>
        <Route path={'gallery'} element={<GalleryPage/>}/>
        <Route path={'toast'} element={<ToasterPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
