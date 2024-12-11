import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import ListPatient from "./Dashboard/ListPatient";
import Patient from "./Dashboard/Patient";
import Medicine from "./Dashboard/Medicine";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/listpatient" element={<ListPatient />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/medicine" element={<Medicine />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
