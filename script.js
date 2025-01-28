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

let randomNum = 0;
let pushNum = document.getElementById("push");
let goStart = document.getElementById("go-area");
let resultArea = document.getElementById("result-area")
let count = 5;
let gameOver = false
let resetArea = document.getElementById("reset-area")
let chanceArea = document.getElementById("chance")
let recode = []


goStart.addEventListener("click",startGo)
resetArea.addEventListener("click",reset)


function setNumber(){
    randomNum = Math.floor(Math.random(randomNum)*100)+1;
console.log(randomNum)
}

function startGo(){

    let pushValue = pushNum.value;
    if(pushValue <1 || pushValue> 100){
        resultArea.textContent = "1과 100사이의 숫자를 입력해주세요."
        return;
    }
        if(recode.includes(pushValue)){
            resultArea.textContent = "이미 입력된 숫자입니다. 다시 입력하세요."
return;
        }


    count --;
    chanceArea.textContent = `남은기회 : ${count}번`;
   



    if(pushValue < randomNum ){
        resultArea.textContent = "UP!"
    }else if(pushValue > randomNum)
    {

        resultArea.textContent = "DOWN!"
    }
    else{
        resultArea.textContent = "정답입니다!"
    }
    recode.push(pushValue)

    if(count<1){
        gameOver = true;
         resultArea.textContent = "게임이 종료 되었습니다."
       
    }
    if(gameOver == true){
        goStart.disabled = true;
    }
}

function reset(){
    pushNum.value = ""
   
    setNumber()
    resultArea.textContent = "결과 값이 여기 나옵니다"
    
    goStart.disabled = false
    gameOver = false;
    count = 5;
    chanceArea.textContent = `남은기회 : ${count}번`;
    
    
}



setNumber()