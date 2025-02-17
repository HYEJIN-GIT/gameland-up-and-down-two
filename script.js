// 유저는 숫자를 입력할 수 있다
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 작으면 Up! 이라고 알려준다
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 크면 Down! 이라고 알려준다
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자와 일치하다면 That’s right이라고 뜨고 게임이 종료된다.
// 유저는 총 5번의 기회가 있다
// 게임이 종료되면 버튼은 비활성화된다
// 리셋버튼을 누르면 게임이 초기화된다
// 유저가 1~100범위 밖에 숫자를 입력할시에 경고메세지가 뜬다
// 유저가 이미 입력한 값을 또 입력할 시에 경고메세지가 뜬다
// 반응형 UI

// let randomNum = 0;
// let pushNum = document.getElementById("push");
// let goStart = document.getElementById("go-area");
// let resultArea = document.getElementById("result-area")
// let count = 5;
// let gameOver = false
// let resetArea = document.getElementById("reset-area")
// let chanceArea = document.getElementById("chance")
// let recode = []
// let resultImg = document.querySelector(".main-img")


// goStart.addEventListener("click",startGo)
// resetArea.addEventListener("click",reset)
// pushNum.addEventListener("focus",deleteNum)




// function setNumber(){
//     randomNum = Math.floor(Math.random(randomNum)*100)+1;
// console.log(randomNum)
// }

// function startGo(){

//     let pushValue = pushNum.value;
//     if(pushValue <1 || pushValue> 100){
//         resultArea.textContent = "1과 100사이의 숫자를 입력해주세요."
//         resultImg.src = "https://images.khan.co.kr/article/2016/07/29/l_20160729020013350003150313.gif"
//         return;
//     }
//         if(recode.includes(pushValue)){
//             resultArea.textContent = "이미 입력된 숫자입니다. 다시 입력하세요."
//             resultImg.src = "https://r2.jjalbot.com/2023/03/yL2o_4Yqv.gif"
// return;
//         }


//     count --;
//     chanceArea.textContent = `남은기회 : ${count}번`;
   



//     if(pushValue < randomNum ){
        
//         resultArea.textContent = "UP!"
//         resultImg.src = "https://file3.instiz.net/data/file3/2018/03/01/a/8/b/a8bcb551de33c9d410920e0ce5570301.gif"
//     }else if(pushValue > randomNum)
//     {

//         resultArea.textContent = "DOWN!"
//         resultImg.src = "https://lh3.googleusercontent.com/proxy/ULjapbq_EIWBBAuc163NjX_pCpF_C7ESr0zp4B2cTO8gi1KZ8o0szPtQ35KnWkf8PHB1Xfs6hv_beQnB71MV1_GS5g6OOnaxm52mzKZBz9bIZNNapVRBsYNnyu6TAxi9wLN3--HL"
//     }
//     else{
//         resultArea.textContent = "정답입니다!"
//         resultImg.src = "https://upload-os-bbs.hoyolab.com/upload/2024/09/21/104401847/726d2870935ab658a1374afb57d9897d_1797245275993196059.gif"
//     }
//     recode.push(pushValue)

//     if(count<1){
//         gameOver = true;
//          resultArea.textContent = "게임이 종료 되었습니다."
//          resultImg.src = "https://media.tenor.com/kQb5z-x4qpkAAAAM/game-over-insert-coins.gif"
       
//     }
//     if(gameOver == true){
//         goStart.disabled = true;
//     }
// }

// function deleteNum(){
//     pushNum.value = ""
// }


// function reset(){
//     resultImg.src = src="https://file3.instiz.net/data/file3/2018/05/14/4/5/4/454ba1e07a5c51c8fbe0e4776e5e974b.gif"
//     pushNum.value = ""
   
//     setNumber()
//     resultArea.textContent = "결과 값이 여기 나옵니다"
    
//     goStart.disabled = false
//     gameOver = false;
//     count = 5;
//     chanceArea.textContent = `남은기회 : ${count}번`;
    
    
// }


// setNumber()



// 유저는 숫자를 입력할 수 있다
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 작으면 Up! 이라고 알려준다
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 크면 Down! 이라고 알려준다
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자와 일치하다면 That’s right이라고 뜨고 게임이 종료된다.
// 유저는 총 5번의 기회가 있다
// 게임이 종료되면 버튼은 비활성화된다
// 리셋버튼을 누르면 게임이 초기화된다
// 유저가 1~100범위 밖에 숫자를 입력할시에 경고메세지가 뜬다
// 유저가 이미 입력한 값을 또 입력할 시에 경고메세지가 뜬다
// 반응형 UI

let inputValue = document.getElementById("push")
let goBtn = document.getElementById("go-area")
let randomNum = 0
let resultArea = document.getElementById("result-area")
let resultImg = document.querySelector(".main-img")
let chance = 5
let chanceArea = document.getElementById("chance")
let reset = document.getElementById("reset-area")
let history = []




goBtn.addEventListener("click",goPush)
reset.addEventListener("click",resetBtn)
inputValue.addEventListener("focus",function(){inputValue.value = ""})



function random(){
    randomNum = Math.floor(Math.random()*100)+1
    console.log(randomNum)

}

function goPush(){
    let pushValue = inputValue.value

    if(pushValue<1 || pushValue>100){
        resultImg.src = "https://images.khan.co.kr/article/2016/07/29/l_20160729020013350003150313.gif"
       resultArea.textContent = "1과 100사이 값을 입력하세요."
       return
   }
   if(history.includes(pushValue)){
       resultImg.src = "https://r2.jjalbot.com/2023/03/yL2o_4Yqv.gif"
        resultArea.textContent = "이미 입력된 값입니다. 다시 입력하세요."
        return
   }

    chance--
    chanceArea.textContent = `남은 기회 : ${chance}번`
    
    if(pushValue>randomNum){
        resultArea.textContent = "DOWN!"
           resultImg.src = "https://lh3.googleusercontent.com/proxy/ULjapbq_EIWBBAuc163NjX_pCpF_C7ESr0zp4B2cTO8gi1KZ8o0szPtQ35KnWkf8PHB1Xfs6hv_beQnB71MV1_GS5g6OOnaxm52mzKZBz9bIZNNapVRBsYNnyu6TAxi9wLN3--HL"
    }else if(pushValue<randomNum){
        resultArea.textContent = "UP!"
        resultImg.src = "https://file3.instiz.net/data/file3/2018/03/01/a/8/b/a8bcb551de33c9d410920e0ce5570301.gif"
    }else{
        resultArea.textContent = "정답입니다!"
        resultImg.src = "https://upload-os-bbs.hoyolab.com/upload/2024/09/21/104401847/726d2870935ab658a1374afb57d9897d_1797245275993196059.gif"
    }
    history.push(pushValue)
    if(chance<1){
        goBtn.disabled = true
    }
}

function resetBtn(){
    inputValue.value = ""
    resultImg.src = src="https://file3.instiz.net/data/file3/2018/05/14/4/5/4/454ba1e07a5c51c8fbe0e4776e5e974b.gif"
    resultArea.textContent = "결과 값이 여기 나옵니다"
    goBtn.disabled = false
    chance = 5
    chanceArea.textContent = `남은 기회 : ${chance}번`
    

}


random()