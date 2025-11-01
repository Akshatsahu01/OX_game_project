let boxes=document.querySelectorAll(".box")
let boxes2=document.getElementsByClassName("box")
let reset=document.querySelector(".reset")
let newbtn=document.querySelector("#new-game")
let msgcontainer =document.querySelector(".msg-container")
let msg =document.querySelector("#message")

const audio1="https://www.myinstants.com/en/instant/modi-ji-wah-48264/?utm_source=copy&utm_medium=share"
const audio2tunank="https://www.myinstants.com/en/instant/tunak-tunak-tun/?utm_source=copy&utm_medium=share"
const winnersound= new Audio(audio2tunank)
const winnersound2= new Audio(audio1)
let winnerpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
Array.from(boxes2).forEach((box)=>{
    turn=true
    box.addEventListener('click',()=>{

           console.log("button was clicked ")
           if(turn==true){
            box.innerHTML="X";
            turn=false
           }
           else{
            box.innerHTML="Y"
            turn=true
           }

           box.disabled=true;
           checkwinner()
    }
    )
}

)

const a1=(winner)=>{
    if(winner=="X"){

        winnersound.play()
        console.log("Akshat")
    }
    else{
        winnersound2.play()
        console.log("Akshat")

        
    }
}
const a2=()=>{
    winnersound.pause()
    winnersound.currentTime = 0
}
const a3=()=>{
     winnersound2.pause()
    winnersound2.currentTime = 0
}
const enablebox=()=>{
    Array.from(boxes2).forEach((box)=>{
        box.innerHTML=""
        box.removeAttribute("disabled")
        msgcontainer.classList.add("hide")
        a2()
        a3()

    })
    }

const disablebox=()=>{
    for( let i of boxes2){
        i.disabled=true
    }
}
const showwinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    a1(winner)
    disablebox()

}
const checkwinner=()=>{
    for(let pattern of winnerpatterns){
        let pos1val=boxes2[pattern[0]].innerText;
        let pos2val=boxes2[pattern[1]].innerText;
        let pos3val=boxes2[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner")
                showwinner(pos1val)
            }
        }
    }
}
newbtn.addEventListener('click',enablebox)
reset.addEventListener("click",enablebox)

