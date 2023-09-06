import { useEffect,useState } from 'react';
import calLogo from '../images/calender logo.png'
import leftarrow from '../images/left arrow.png'
import rightarrow from '../images/right arrow.png'
import { AiFillCaretLeft,AiFillCaretRight} from "react-icons/ai";

function DateTime({step,setStep}) {
    let date = new Date();
    date.setDate(date.getDate()+step)

  

    function handlerdataInc(){
      // console.log(step);
        setStep(cur=>cur+1)
    }
    function handlerdataDec(){
      setStep(cur=>cur-1)
    }
    return (
        <div className='time-con'>
            <button onClick={handlerdataDec}><AiFillCaretLeft style={{color:"rgb(95, 44, 95)", fontSize: "3em" }}/></button>
            {/* <img src={leftarrow} className='leftArrowImg'/> */}
   
            <div className='calender-reset'>
              <img  src={calLogo} className='cal-logo'/>
              {step!==0 && <button onClick={()=>setStep(0)} className='reset-btn'>Today</button>}
            </div>
            <div className='date_day'>
                <h2>{date.toLocaleString('default', { weekday: 'long' })} </h2>
                <h3>{date.getDate()} {date.toLocaleString('default', { month: 'long' })}  {date.getFullYear()}</h3>
                <Time/>
            </div>
            <button onClick={handlerdataInc}><AiFillCaretRight style={{color:"rgb(95, 44, 95)", fontSize: "3em" }}/></button>
            {/* <img src={rightarrow} className='rightArrowImg'/> */}
            
        </div>
    )
}


function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000)

    return () => clearInterval(intervalId);
    }, [])

    let hour = time.getHours() < 13 ? time.getHours() : time.getHours()%12 ;
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let ampm = time.getHours() < 13 ? "AM" : "PM";
    
  return (
    <div>
      <div className='box'><h3>{hour<10? "0"+hour:hour}:{min<10? "0"+min:min}:{sec<10? "0"+sec:sec} {ampm}</h3></div>
    </div>
  )
}

export default DateTime
