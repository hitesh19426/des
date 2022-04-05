import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LayoutPage from './routes/layout'
import HomePage from './routes/home'
import AboutPage from './routes/about'
import EligibilityPage from './routes/eligibilty'
import CoursesPage from './routes/courses'
import FoundersPage from './routes/founders'
import ContactPage from './routes/contact'
import StudentLoginPage from './routes/student_login'
import StudentSignupPage from './routes/student_signup'
import InstituteLoginPage from './routes/institute_login'
import InstituteSignupPage from './routes/institute_signup'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<LayoutPage/>}>
          <Route index element={<HomePage />} />
          <Route path = "about" element = {<AboutPage/>} />
          <Route path = "eligibility" element = {<EligibilityPage />} />
          <Route path = "courses" element = {<CoursesPage/>} />
          <Route path = "founders" element = {<FoundersPage />} />
          <Route path = "contact" element = {<ContactPage/>} />
          <Route path = "student_login" element = {<StudentLoginPage />} />
          <Route path = "institute_login" element = {<InstituteLoginPage />} />
          <Route path = "student_signup" element = {<StudentSignupPage/>} />
          <Route path = "institute_signup" element = {<InstituteSignupPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
