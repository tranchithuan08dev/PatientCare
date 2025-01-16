import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import ListPatient from "./Dashboard/ListPatient";
import Patient from "./Dashboard/Patient";
import Medicine from "./Dashboard/Medicine";
import ListMedicine from "./Dashboard/ListMedicine";
import Revenue from "./Dashboard/Revenue";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/revenue" element={<Revenue />} />
          <Route path="/listpatient" element={<ListPatient />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/listmedicine" element={<ListMedicine />} />
          <Route path="/medicine" element={<Medicine />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
