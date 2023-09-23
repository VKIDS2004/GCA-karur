import { useEffect, useState } from "react";
import Header from "./Header";
import DateTime from "./datetime";
import Dayorder from "./dayorder";
import "../app.scss";
import Colortheme from "./Colortheme";
import axios from "axios";
import { api } from "./api";

function App() {
  const [step, setStep] = useState(0);
  const [period, setperiod] = useState(null);
  const [color, setcolor] = useState("rgb(30, 30, 30)");

  const [clicks,setclicks] = useState(0);
  useEffect(function () {

    const getApi = async () => {
        
    try{
        const res = await axios.get("https://6508523156db83a34d9c20cf.mockapi.io/api/chandru");
        await axios.put("https://6508523156db83a34d9c20cf.mockapi.io/api/chandru/" + 1, {clicks : res.data[0].clicks+1});
        await axios.put("https://6508523156db83a34d9c20cf.mockapi.io/api/chandru/" + 1, {date : {name:"dfk"}} );

        setclicks(()=>res.data[0].clicks+1);
    }
    catch(ex){
            console.log(ex.message)
    }
    };
    getApi();
    // api();
  }, []);


  return (
    <div className="App">
      <Header />
      <DateTime step={step} setStep={setStep} color={color} />
      <Dayorder step={step} />
      <Colortheme color={color} setcolor={setcolor} />
      <p className="copyright">Copyright @ 2023 Chandru (  {clicks?`viewers : ${clicks}`:"loading...."} )</p>
    </div>
  );
}



export default App;
