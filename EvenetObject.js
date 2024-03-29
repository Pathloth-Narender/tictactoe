let btn1=document.querySelector("#btn1");
btn1.onclick=(e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.clientX,e.clientY);
    console.log(e.target);
    console.log("You clickrd click me! button");
}
let btn2=document.querySelector("#btn2");
btn2.onmouseover=(evnt)=>{
    console.log("You clickrd click me! button");

    console.log(evnt);
    console.log(evnt.type);
    console.log(evnt.clientX,evnt.clientY);
    console.log(evnt.target);
}