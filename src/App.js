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
import CoursesInstitutePage from './routes/courses_institute'
import ConsortiumPartnersPage from './routes/consortium-partners'
import AdmissionCreteriaPage from './routes/admission-creteria.jsx'
import EligibilityResultsPage from './routes/eligibility-results.jsx'
import InstituteProfilePage from './routes/institute/profile.jsx'
import InstitueAnalysisPage from './routes/institute/analysis.jsx'
import InstitueCoursesPage from './routes/institute/courses.jsx'
import InstitueCreteriasPage from './routes/institute/creterias.jsx'
import InstitueFacultyPage from './routes/institute/faculty.jsx'
import InstitueStudentsPage from './routes/institute/students.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<LayoutPage/>}>
          <Route index element={<HomePage />} />
          <Route path = "about" element = {<AboutPage/>} />
          <Route path = "eligibility" element = {<EligibilityPage />} />
            <Route path = "eligibility/results" element = {<EligibilityResultsPage />} />
          <Route path = "courses" element = {<CoursesPage/>} />
            <Route path = "courses/institute" element = {<CoursesInstitutePage/>} />
              <Route path = "institute/consortium-partners" element = {<ConsortiumPartnersPage/>} />
              <Route path = "institute/admission-creteria" element = {<AdmissionCreteriaPage/>} />
          <Route path = "founders" element = {<FoundersPage />} />
          <Route path = "contact" element = {<ContactPage/>} />
          <Route path = "student_login" element = {<StudentLoginPage />} />
          <Route path = "institute_login" element = {<InstituteLoginPage />} />
          <Route path = "student_signup" element = {<StudentSignupPage/>} />
          <Route path = "institute_signup" element = {<InstituteSignupPage/>} />
            
            <Route path = "institute/profile" element = {<InstituteProfilePage/>} />
            <Route path = "institute/analysis" element = {<InstitueAnalysisPage/>} />
            <Route path = "institute/creterias" element = {<InstitueCreteriasPage/>} />
            <Route path = "institute/students" element = {<InstitueStudentsPage/>} />
            <Route path = "institute/faculty" element = {<InstitueFacultyPage/>} />
            <Route path = "institute/courses" element = {<InstitueCoursesPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
