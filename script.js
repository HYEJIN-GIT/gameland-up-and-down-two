//먼저 랜덤 숫자 나오게 설정하기
//input에 값 넣고 go 버튼 누르면 결과 값 나오게 하기




let random = 0;
let goBtn = document.getElementById("btn")
let inputArea = document.getElementById("input-area")
let upDown = document.getElementById("result-area")
let chance = 7;
let chanceArea = document.getElementById("chance") 


goBtn.addEventListener("click",go)
inputArea.addEventListener("focus",function(){inputArea.value = ""})

function randomNum () {
    random = Math.floor(Math.random()*50+1)
}

randomNum();
console.log(random)


function go (){
    if(inputArea.value == 0){
        upDown.textContent = "*경고* 값을 입력하세요! !"
         upDown.style.color ="red"
        return
    }
   if(inputArea<1 ||inputArea.value >50){
    upDown.textContent = "1부터 50까지의 숫자를 입력하세용~!"
    upDown.style.color ="red"
    return
   }
   
chance --;
 chanceArea.textContent = `남은 기회 : ${chance}번`

 if(random>inputArea.value){
    upDown.textContent = "Up! 값을 올리세요!"
    
 }else if(random<inputArea.value){
upDown.textContent = "Down! 값을 내리세요!!"

 }else{
upDown.textContent = "♥ 정답입니다 ♥"
upDown.style.color ="rgb(68, 0, 151)"
 }

if(chance<1){
    goBtn.disabled = true;
  

}

}

