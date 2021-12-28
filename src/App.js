import './App.css';
import { Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/home.page';
import { Chapter1 } from './pages/chapter1.time.page';
import { Chapter2 } from './pages/chapter2.tree-interval';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Chapter1Recognitions } from './pages/chapter-1.page/nhanbiet.page/nhanbiet.page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='chapter-1' element={<Chapter1/>}/>
        <Route path='chapter-2' element={<Chapter2/>}/>
        <Route path='chapter-1/nhanbiet' element={<Chapter1Recognitions/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
