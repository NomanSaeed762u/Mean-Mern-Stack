import React, {useState,useEffect} from "react";
function Practice(){
const [tex, settext]=useState('')
settext('basit')
useEffect(()=>{
    console.log("baist")
},[])
return (
    <div >
        <h1>{tex}</h1>
    </div>
)
}