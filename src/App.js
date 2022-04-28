import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './pages/aboutPage';
import ContactPage from './pages/contactPage';
import HomePage from './pages/homePage';
import ProjectsPage from './pages/projectsPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/projects' element={<ProjectsPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
    </Routes>
  );
}

export default App;
