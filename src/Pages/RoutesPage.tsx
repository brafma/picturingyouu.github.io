import {
    HashRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import FormPage from "./FormPage";
import Homepage from "./Homepage";

function RoutesPage(){
return (
    <Router>
        <Routes>
          <Route path="/formulario" element={<FormPage />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
    </Router>
  );
}
 export default RoutesPage;