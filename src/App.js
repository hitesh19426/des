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
import InstituteCreteriasPage from './routes/institute/creterias.jsx'
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

import Apply from './routes/student/apply.jsx'
import ConsortiumInstitiute from './routes/student/consortiumInstitiute.jsx'
import Courselist from './routes/student/courselist.jsx'
import Dashboard from './routes/student/dashboard.jsx'
import DashboardNew from './routes/student/dashboardNew.jsx'
import Degree from './routes/student/degree.jsx'
import Degree2 from './routes/student/degree2.jsx'
import Degree3 from './routes/student/degree3.jsx'
import Degree4 from './routes/student/degree4.jsx'
import Degree5 from './routes/student/degree5.jsx'
import Degree6 from './routes/student/degree6.jsx'
import Degree7 from './routes/student/degree7.jsx'
import Fill from './routes/student/fill.jsx'
import Grades from './routes/student/grades.jsx'
import Profile from './routes/student/profile.jsx'
import Register from './routes/student/register.jsx'
import SavedCourses from './routes/student/savedCourses.jsx'
import StudentRegister from './routes/student/studentRegister.jsx'

import Dropout from './routes/student/dropout/dropout.jsx'
import Dropout2 from './routes/student/dropout/dropout2.jsx'
import DropoutProceed from './routes/student/dropout/dropout_proceed.jsx'
import DropoutHclist from './routes/student/dropout/dropout_hclist.jsx'
import DropoutHC from './routes/student/dropout/dropout_hc.jsx'
import DropoutFinal from './routes/student/dropout/dropout_final.jsx'
import DropoutConfirm from './routes/student/dropout/dropout_confirm.jsx'

import HC from './routes/student/hostchange/hc.jsx'
import HCWarning from './routes/student/hostchange/hc_warning.jsx'
import HCTable6 from './routes/student/hostchange/hc_table6.jsx'
import HCTable4 from './routes/student/hostchange/hc_table4.jsx'
import HCTable3 from './routes/student/hostchange/hc_table3.jsx'
import HCStream from './routes/student/hostchange/hc_stream.jsx'
import HCStream2 from './routes/student/hostchange/hc_stream2.jsx'
import HCNP from './routes/student/hostchange/hc_np.jsx'
import HCInstitute from './routes/student/hostchange/hc_institute.jsx'
import HCFinal from './routes/student/hostchange/hc_final.jsx'

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
            <Route path = "institute/creterias" element = {<InstituteCreteriasPage/>} />
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

          <Route path="/apply" element = {<Apply />} />
          <Route path="/consortiumInstitiute" element = {<ConsortiumInstitiute />} />
          <Route path="/courselist" element = {<Courselist/>} />
          <Route path="/dashboard" element = {<Dashboard/>} />
          <Route path="/dashboardNew" element ={<DashboardNew/>} />
          <Route path="/degree" element = {<Degree/>} />
          <Route path="/degree2" element = {<Degree2/>} />
          <Route path="/degree3" element = {<Degree3/>} />
          <Route path="/degree4" element = {<Degree4/>} />
          <Route path="/degree5" element = {<Degree5/>} />
          <Route path="/degree6" element = {<Degree6/>} />
          <Route path="/degree7" element = {<Degree7/>} />
          <Route path="/fill" element = {<Fill/>} />
          <Route path="/grades" element = {<Grades/>} />
          <Route path="/profile" element = {<Profile/>} />
          <Route path="/register" element = {<Register/>} />
          <Route path="/savedCourses" element = {<SavedCourses/>} />
          <Route path="/studentRegister" element = {<StudentRegister/>} />

          <Route path="/dropout" element = {<Dropout/>} />
          <Route path="/dropout2" element = {<Dropout2 />} />
          <Route path="/dropout_proceed" element = {<DropoutProceed/>} />
          <Route path="/dropout_hclist" element = {<DropoutHclist/>} />
          <Route path="/dropout_hc" element = {<DropoutHC/>} />
          <Route path="/dropout_final" element = {<DropoutFinal/>} />
          <Route path="/dropout_confirm" element = {<DropoutConfirm/>} />

          <Route path="/hc" element = {<HC />} />
          <Route path="/hc_warning" element = {<HCWarning />} />
          <Route path="/hc_table6" element = {<HCTable6 />} />
          <Route path="/hc_table4" element = {<HCTable4 />} />
          <Route path="/hc_table3" element = {<HCTable3 />} />
          <Route path="/hc_stream" element = {<HCStream />} />
          <Route path="/hc_stream2" element = {<HCStream2 />} />
          <Route path="/hc_np" element={<HCNP />} />
          <Route path="/hc_institute" element={<HCInstitute />} />
          <Route path="/hc_final" element={<HCFinal />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
