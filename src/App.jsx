import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ExportExcel from "./components/ExportExcel";
import { Report } from "./components/Report";
import { useState } from "react";
import RangeSelector from "./components/RangeSelector";
import FacebookChat from "./components/FacebookChat";

import "./App.css";
import FacebookMsg from "./components/FacebookMsg";

function App() {
  const [range, setRange] = useState(1);

  return (
    <>
      <div className="d-flex gap-3 justify-content-center my-2">
        <ExportExcel />
        <RangeSelector setRange={setRange} />
      </div>
      <Report range={range} />
      <FacebookMsg />
    </>
  );
}

export default App;
