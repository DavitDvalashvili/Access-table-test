import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ExportExcel from "./components/ExportExcel";
import { Report } from "./components/Report";

import "./App.css";

function App() {
  return (
    <>
      <ExportExcel />
      <Report />
    </>
  );
}

export default App;
