let btn1=document.querySelector("#btn1");
btn1.onclick=()=>{
    console.log("click me bitton was clicked...");
    let a=25;
    a++;
    console.log(a);//26
}

let btn2=document.querySelector("#btn2");
btn2.ondblclick=()=>{
    console.log("Youn are on double click button....");
    let a=5;
    a++;
    console.log(a);//26
}

let btn3=document.querySelector("#btn3");
btn3.onmouseover=()=>{
    console.log("You are on mouse over button...");
}