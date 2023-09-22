import { useState } from "react";
import Header from "./Header";
import DateTime from "./datetime";
import Dayorder from "./dayorder";
import '../app.scss'
import Colortheme from "./Colortheme";



function App() {
  const [step,setStep] = useState(0);
  const [period,setperiod] = useState(null);
  const [color,setcolor] = useState("rgb(30, 30, 30)")

  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
        {/* <Route path="/" element={}> 
            
          </Route>
      </Routes>
      
    </BrowserRouter> */}
    
        <Header/>
        <DateTime step={step} setStep={setStep} color={color}/>
        <Dayorder step={step}/>
        <Colortheme color={color} setcolor={setcolor}/>
        <p className='copyright'>Copyright @ 2023 Chandru</p>
    </div>
  );
}

export default App;
