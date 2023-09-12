import { useEffect,useState } from 'react';
import calLogo from '../images/calender logo.png'
import { AiFillCaretLeft,AiFillCaretRight} from "react-icons/ai";

function DateTime({step,setStep,color}) {
    let date = new Date();
    date.setDate(date.getDate()+step)

  

    function handlerdataInc(){
      // console.log(step);
        setStep(cur=>cur+1)
    }
    function handlerdataDec(){
      setStep(cur=>cur-1)
    }

  
    // const color = getComputedStyle(document.documentElement).getPropertyValue('--main-color');
    document.documentElement.style.setProperty('--main-color', color);
    


    return (
        <div className='time-con'>
            <button onClick={handlerdataDec}><AiFillCaretLeft style={{color:color, fontSize: "3em" }}/></button>
            {/* <img src={leftarrow} className='leftArrowImg'/> */}
   
            <div className='calender-reset'>
              <img  src={calLogo} className='cal-logo'/>
              {/* <BsFillCalendarEventFill/> */}
              {step!==0 && <button onClick={()=>setStep(0)} className='reset-btn'>Today</button>}
            </div>
            <div className='date_day'>
                <h2>{date.toLocaleString('default', { weekday: 'long' })} </h2>
                <h3>{date.getDate()} {date.toLocaleString('default', { month: 'long' })}  {date.getFullYear()}</h3>
                <Time/>
            </div>
            <button onClick={handlerdataInc}><AiFillCaretRight style={{color:color, fontSize: "3em" }}/></button>
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

    let now_hour;



  return (
    <div>
      <div className='box'><h3>{hour<10? "0"+hour:hour}:{min<10? "0"+min:min}:{sec<10? "0"+sec:sec} {ampm}</h3></div>
    </div>
  )
}

export default DateTime


// if((hour===13||hour===14)&&min>=15&&min<=10)
//       console.log("first");
//     else if((hour===14||hour===15)&&min>=10&&min<=5)
//       console.log("second");
//     else if((hour===15||hour===16)&&min>=5&&min<=0)
//       console.log("third");
//     else if(hour===16&&min>=0&&min<=55)
//       console.log("four");
//     else if((hour===16||hour===17)&&min>=55&&min<=55)
//       console.log("five");