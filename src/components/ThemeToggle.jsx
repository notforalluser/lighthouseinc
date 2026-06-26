import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function ThemeToggle() {

const [dark,setDark]=useState(false);


useEffect(()=>{

const saved=localStorage.getItem("theme");

if(saved==="dark"){
setDark(true);
document.documentElement.classList.add("dark");
}
else{
document.documentElement.classList.remove("dark");
}

},[]);



useEffect(()=>{

if(dark){

document.documentElement.classList.add("dark");
localStorage.setItem("theme","dark");

}
else{

document.documentElement.classList.remove("dark");
localStorage.setItem("theme","light");

}

},[dark])



return(

<button

onClick={()=>setDark(!dark)}

className='

w-11
h-11

rounded-xl

border

border-slate-200

dark:border-slate-700


bg-white

dark:bg-slate-900


flex

items-center

justify-center

duration-300

'


>

{

dark ?

<Sun size={18}/> :

<Moon size={18}/>

}


</button>

)


}


export default ThemeToggle