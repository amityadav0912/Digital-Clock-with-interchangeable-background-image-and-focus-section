window.addEventListener("DOMContentLoaded",showTime());
function showTime()
{
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "AM";
    
    // //let date = new Date();
    // let hour = 21
    // let minutes = 12
    // let seconds = 12
    // let session = "AM";

    if(hour==0)
    {
        hour=12;
    }
    if(hour>=12)
    {
        hour=hour-12;
        session="PM";
    }
    hour = hour<10 ? ('0'+hour) : hour;
    minutes = minutes<10 ? ('0'+minutes) : minutes;
    seconds = seconds<10 ? ('0'+seconds) : seconds;
    
    // const time = hour + ":"+ minutes +":" +seconds +""+"|"+"" + session;
    // console.log(time);
    const time =`${hour}:${minutes}<small>.${seconds}|${session}</small>`;
    document.getElementById("DisplayClock").innerHTML=time
    setTimeout(showTime,1000);

    // Change body background

    let bg;

    const userName = "Amit";
    const user=document.getElementById("user");
    //console.log(hour,minutes,seconds,session);
    if(hour>4 && hour<8 && session==="AM")
    {
        bg=`url(https://source.unsplash.com/-G3rw6Y02D0)`;
        user.innerHTML=`Good Morning ${userName}`;
    }else if(hour>8 && hour<=11 && minutes <60 && session==="AM")
    {
        bg=`url(https://source.unsplash.com/I4nEh7g6FbI)`;
        user.innerHTML=`Have a Good Day ${userName}`;
    }
    else if(hour<4 && session==="PM")
    {
        bg=`url(https://source.unsplash.com/P36JW5plcj4)`;
        user.innerHTML=`Good AfterNoon ${userName}`;
    }
    else if(hour<8 && session==="PM")
    {
        bg=`url(https://source.unsplash.com/mOcdke2ZQoE)`;
        user.innerHTML=`Good Evening ${userName}`;
    }
    else if(hour<10 && session==="PM")
    {
        bg=`url(https://source.unsplash.com/Q_Moi2xjieU)`;
        user.innerHTML=`Its time for Delicious Food ${userName}`;
    }else
    {
        bg=`url(https://source.unsplash.com/BYu8ITUWMfc)`;
        user.innerHTML=`Good Night ${userName}`;
    }

    const body = document.querySelector("body");
    body.style.background=`${bg} center/cover`


    document.querySelector(".focus-container input").
    addEventListener("keypress",function(event){
        if(event.key==="Enter")
        {
            const focus=document.querySelector(".focus-container input");
            document.querySelector(".focus-container").
            innerHTML=`<h6>Today:</h6><h1>${focus.value}</h1>`;
        }
    }
        )
}   