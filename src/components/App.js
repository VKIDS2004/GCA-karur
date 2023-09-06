import { useState } from "react";
import Header from "./Header";
import DateTime from "./datetime";
import Dayorder from "./dayorder";
import '../app.scss'

function App() {
  const [step,setStep] = useState(100)
  return (
    <div className="App">
        <Header/>
        <DateTime step={step} setStep={setStep}/>
        <Dayorder step={step}/>
    </div>
  );
}

export default App;
