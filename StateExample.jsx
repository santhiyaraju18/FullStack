import { useState } from "react";
export default function StateExample()
{
    const[count,setCount]=useState(0);
    function buttonclick()
    {
        setCount(count+1);
    }
    return <>
    <h1>State Example</h1>
    <button onClick={buttonclick} style={{background:"#e53947ff", color:"pink"}}>
        Visitor Count={count}
    </button>
    </>
}