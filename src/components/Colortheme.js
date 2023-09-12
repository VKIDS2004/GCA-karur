import {useEffect} from 'react'

function Colortheme({color,setcolor}) {

    useEffect(function(){
        let the=localStorage.getItem("theme")
        console.log(the)
        the?setcolor(the):setcolor("rgb(30, 30, 30)")
    },[])

    function setcol(curcol){
        localStorage.setItem("theme",curcol)
        setcolor(curcol)
    }

    return (


        
        <div className='color-con'>
                <h2>Color theme</h2>
          
            <div className='color-con-btns'>
                <button type="Color" className={`${color==="rgb(30, 30, 30)"?"activecol":""} color-changer color-changer-black`}  onClick={()=>setcol("rgb(30, 30, 30)")}></button>
                <button type="Color" className={`${color==="rgb(0, 78, 97)"?"activecol":""} color-changer color-changer-yellow`}  onClick={()=>setcol("rgb(0, 78, 97)")}></button>
                <button type="Color" className={`${color==="rgb(88, 9, 9)"?"activecol":""} color-changer color-changer-brown`}  onClick={()=>setcol("rgb(88, 9, 9)")}></button>
                <button type="Color" className={`${color==="rgb(65, 28, 89)"?"activecol":""} color-changer color-changer-voilet`}  onClick={()=>setcol("rgb(65, 28, 89)")}></button>
                <button type="Color" className={`${color==="rgb(11, 92, 0)"?"activecol":""} color-changer color-changer-green`}  onClick={()=>setcol("rgb(11, 92, 0)")}></button>
            </div>
        </div>
    )
}

export default Colortheme
