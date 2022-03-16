import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './routes/home'
import AboutPage from './routes/about'
import EligibilityPage from './routes/eligibilty'
import CoursesPage from './routes/courses'
import FoundersPage from './routes/founders'
import ContactPage from './routes/contact'
import LoginPage from './routes/login'
import SignupPage from './routes/signup'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<HomePage/>}>
          <Route path = "about" element = {<AboutPage/>} />
          <Route path = "eligibility" element = {<EligibilityPage />} />
          <Route path = "courses" element = {<CoursesPage/>} />
          <Route path = "founders" element = {<FoundersPage />} />
          <Route path = "contact" element = {<ContactPage/>} />
          <Route path = "login" element = {<LoginPage />} />
          <Route path = "signup" element = {<SignupPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
