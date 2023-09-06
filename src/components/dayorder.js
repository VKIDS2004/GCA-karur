import { useState,useEffect } from "react";
import { dayOrder, monthOrder } from "../data/timetable";
import { FaBeer } from 'react-icons/fa';

function Dayorder({ step }) {
  let date = new Date();
  date.setDate(date.getDate() + step);

  let curdate = date.getDate();
  let curMon = date.getMonth()+1;
  let curday = date.getDay();
  let curdayord = monthOrder[curMon-1][curdate-1];
  let curdayordperiods=(dayOrder[curdayord?.dayorder-1]?.periods)

  let roman = ["I", "II", "III", "IV", "V", "VI"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"]

//   console.log(curdayord);
//   let periods = dayOrder[curdate - 1]?.periods;
  // console.log(date.getDay());

  useEffect(function(){
    let hour = date.getHours();
    let min = date.getMinutes();
    let now ;

    // if(hour<=13 && min >= 15)
    //     now = 1;
    // else if(hour>=14 && min >= 10)
    //     now = 2;
    // else if(hour>=15 && min >= 5)
    //     now = 2;
    // else if(hour>=16 && min >= 0)
    //     now = 2;
    // else if(hour>=17 && min >=55)
    //     now = 2;
  })

  return (
    <div className="time-table-con">
      <div className="dayorder-table">

        <h2 className="dayorder-head">
            {
                curdayord?curdayord.dayorder!==0?` ${roman[curdayord.dayorder-1]} day order`:`${(curday === 0 || curday === 6 ) ?curday===0?"Sunday":"Saturday":curdayord.holiday} Holiday`:"Update will be soon"
            }
        </h2>


        <div className="period-list">
            {curdayord?curdayord.dayorder!==0?<div>
                <ul>
                {curdayordperiods.map((hr,i)=>
                    
                        <List roman={roman} hr={hr} i={i} key={i}/>
                )}
                </ul>
            </div>:<p className='msg-box'>Don't waste your time</p>:<p className='msg-box'>stay tune</p>}
        </div>
      </div>
    </div>
  );
}

function List({roman,hr,i}) {
    return ( <li>
        <h3>{roman[i]}</h3>
        <p className={hr.toString() === "LAB" ? "labhour period" : "period"}>{hr}</p>
    </li>
    )
}

export default Dayorder;
