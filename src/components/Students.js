import React,{useState} from "react";

function Students(){
    const[name,setName]=useState({name:'', bios:'',score:'' })
return(
    <form>
        <input type="text"value={name} onChange={e=> setName({name:e.target.value})}/>
        <input type="text" value={bios} onChange={e=> setName({bios:e.target.value})}/>
        {/* <input type="text" value={score} onChange={e=> setName({name:e.target.value})}/> */}
        <h2>name:{name.name}</h2>
        <h2>bios:{name.bios}</h2>
        {/* <h2>score:{name.score}</h2> */}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    </form>
)


}
export default Students;