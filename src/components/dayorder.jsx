import { useState,useEffect } from "react";
import { dayOrder, monthOrder } from "../data/timetable";
import styles from './Dayorder.module.css'

let timing = [
  "01:15 PM - 02:10 PM",
  "02:10 PM - 03:05 PM",
  "03:05 PM - 04:00 PM",
  "04:00 PM - 04:55 PM",
  "04:55 PM - 05:55 PM",
]

function Dayorder({ step }) {
  const[NowHour,setNowHour ]  = useState(-1);




  let date = new Date();
  date.setDate(date.getDate() + step);

  let curdate = date.getDate();
  let curMon = date.getMonth();
  let curday = date.getDay();
  let curdayord = monthOrder[curMon][curdate-1];
  let curdayordperiods=(dayOrder[curdayord?.dayorder-1]?.periods)


  
      useEffect(function(){
      const a =  setInterval(() => {
        let date = new Date();
        let hour=date.getHours();
        let min= date.getMinutes();

      
          if((hour===13&&min>=15)||(hour===14&&min<10))
            setNowHour(1);
          else if((hour===14&&min>=10)||(hour===15&&min<5))
          setNowHour(2);
          else if((hour===15&&min>=5)||(hour===16&&min<0))
          setNowHour(3);
          else if((hour===16&&min>=0)||(hour===16&&min<55))
          setNowHour(4);
          else if((hour===16&&min>=55)||(hour===17&&min<=55))
          setNowHour(5);
          else setNowHour(-1)
        }, 1000);
        
        return ()=>{clearInterval(a)}
      },[NowHour]
      )

if(curdayord&& curdayord.dayorder!==0)return (
      <div className={styles.dayorder_container}>
            <table>
                {curdayordperiods.map((hr,i)=>
                    
                        <List hr={hr} i={i} key={i} NowHour={NowHour} step={step}/>
                )}
            </table>
    </div>
  );
}


function List({roman,hr,i,NowHour,step}) {
    return ( <tr >
        <td>{i+1}</td>
        <td className={`${hr.toString() === "LAB" ? "labhour period" : "period"}`}>
          {hr}
        </td>
        <td><p className={`${NowHour!==-1&&NowHour===i+1&&step===0&&"active"}`}>{timing[i]}</p></td>
       
    </tr>
    )
}




export default Dayorder;

