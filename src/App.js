import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/home.page';
import { Chapter1 } from './pages/chapter1.time.page';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChapterPart from './pages/chapter-2.page/chapter-2.part';
import { Chapter1Recognitions } from './pages/chapter-1.page/nhanbiet.page/nhanbiet.page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='chapter-1' element={<Chapter1/>}/>
        <Route path='chapter-2'>
          <Route path='part/:partId' element={<ChapterPart />} />
        </Route>
        <Route path='chapter-1/nhanbiet' element={<Chapter1Recognitions/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
