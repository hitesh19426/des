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
import InstituteAdmissionCreteriaPage from './routes/institute/admission-creteria.jsx'
import InstituteDropoutAskPage from './routes/institute/dropout-ask.jsx'
import InstituteDegreeCreteriaPage from './routes/institute/degree-creteria.jsx'
import InstituteHostChangeCreteriaPage from './routes/institute/host-change-creteria.jsx'

import HostChangeForm from './routes/institute/host-change-form.jsx'
import AdmissionForm from './routes/institute/admission-form.jsx'
import DropoutCreteria from './routes/institute/dropout-creteria.jsx'
import DegreeForm from './routes/institute/degree-form.jsx'
import DropoutForm from './routes/institute/dropout-form.jsx'

import HostECEthanks from './routes/institute/host-thanks.jsx'
import HostECETable from './routes/institute/host-ece-table.jsx'
import AdmissionMEthanks from './routes/institute/admission-thanks.jsx'
import AdmissionTable from './routes/institute/admission-table.jsx'
import DegreeThanks from './routes/institute/degree-thanks.jsx'
import DegreeTable from './routes/institute/degree-table.jsx'
import DropoutThanks from './routes/institute/dropout-thanks.jsx'
import DropoutTable from './routes/institute/dropout-table.jsx'

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
              <Route path = "institute/creterias/host-change-creteria" element = {<InstituteHostChangeCreteriaPage/>} />
              <Route path = "institute/creterias/host-change-creteria/host-change-form" element = {<HostChangeForm/>} />

              <Route path = "institute/creterias/admission-creteria" element = {<InstituteAdmissionCreteriaPage />} />
              <Route path = "institute/creterias/admission-creteria/admission-creteria-form" element = {<AdmissionForm />} />

              <Route path = "institute/creterias/dropout-ask" element = {<InstituteDropoutAskPage/>} />
              <Route path = "institute/creterias/dropout-creteria" element = {<DropoutCreteria/>} />
              <Route path = "institute/creterias/dropout-creteria/dropout-form" element = {<DropoutForm/>} />
              
              <Route path = "institute/creterias/degree-creteria" element = {<InstituteDegreeCreteriaPage/>} />
              <Route path = "institute/creterias/degree-creteria/degree-form" element = {<DegreeForm/>} />
            <Route path = "institute/students" element = {<InstitueStudentsPage/>} />
            <Route path = "institute/faculty" element = {<InstitueFacultyPage/>} />
            <Route path = "institute/courses" element = {<InstitueCoursesPage/>} />
          
          <Route path = "/dropoutThanks" element = {<DropoutThanks />} />
          <Route path = "/dropoutTable" element = {<DropoutTable/>} />
          <Route path = "/degreeThanks" element = {<DegreeThanks />} />
          <Route path = "/degreeTable" element = {<DegreeTable/>} />
          <Route path="/hostECEthanks" element = {<HostECEthanks/>} />
          <Route path="/hostECEtable" element = {<HostECETable />} />
          <Route path="/admissionMEthanks" element = {<AdmissionMEthanks />} />
          <Route path="/admissionMEtable" element = {<AdmissionTable />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
