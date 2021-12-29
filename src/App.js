import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/home.page';
import { Chapter1 } from './pages/chapter1.time.page';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChapterPart from './pages/chapter-2.part';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='chapter-1' element={<Chapter1/>}/>
        <Route path='chapter-2'>
          <Route path='part/:partId' element={<ChapterPart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
