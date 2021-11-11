console.log("heelo tere!")
let turnmusic=new Audio("./stuffs/onclick.wav")
let gameover=new Audio("./stuffs/DRKGYPE-victory.mp3")
let turn="X"
let player="Player-1"
let isgameover=false

//Function to change the player's turn
const changeturn=()=>{
    return turn==="X"?"0":"X"
}

//Function to change in 
const changeplayer=()=>{
    return player==="Player-1"?"Player-2":"Player-1"
}

//winning Function
const checkwin=()=>{
    let boxtexts=document.getElementsByClassName("boxtext")
    let win=[
        [0,1,2],                                          //0 1 2
        [3,4,5],                                          //3 4 5   Now check the        
        [6,7,8],                                          //6 7 8
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    win.forEach(e=>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText===boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText!=="")){
            document.querySelector('.info').innerText=boxtexts[e[0]].innerText+ " Won";
            isgameover=true
            document.querySelector(".gif").getElementsByClassName("gif")[0].style.width="200px"
        }
    })
}


//Game Logic
gameover.muted=true;
gameover.play()
let boxes=document.getElementsByClassName("box")
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===""){
            boxtext.innerText=turn;
            turn=changeturn()
            player=changeplayer()
            turnmusic.play()
            checkwin()
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText="Turn for "+player
            }
        }
    })
})


//Add onClick eventListner to Restart button

reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll(".boxtext")
    Array.from(boxtext).forEach(element=>{
        element.innerText=""
    })
    player="Player-1"
    isgameover=false
    document.getElementsByClassName("info")[0].innerText="Turn for "+player
    document.querySelector(".gif").getElementsByTagName("img")[0].style.width="0px"
})