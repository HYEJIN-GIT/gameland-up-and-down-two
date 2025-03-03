



let random = 0;
let goBtn = document.getElementById("btn")
let inputArea = document.getElementById("input-area")
let upDown = document.getElementById("result-area")
let chance = 7;
let chanceArea = document.getElementById("chance") 
let imageSection = document.querySelector(".image-area")
let distinct = []

goBtn.addEventListener("click",go)
inputArea.addEventListener("focus",function(){inputArea.value = ""})


function enterKey() {
    if (window.event.keyCode == 13) {
    go()
    }
}


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
   if(distinct.includes(inputArea.value)){
    upDown.textContent = "중복된 숫자 입니다 ! !"
    upDown.style.color ="purple"
    return
   }

  
chance --;
 chanceArea.textContent = `남은 기회 : ${chance}번`

 if(random>inputArea.value){
    imageSection.scr = '/image/IMG_1275.PNG'
    upDown.textContent = "Up! 값을 올리세요!"
    upDown.style.color =" rgb(4, 118, 249)"
   
   
    
 }else if(random<inputArea.value){
upDown.textContent = "Down! 값을 내리세요!!"
 upDown.style.color =" rgb(4, 118, 249)"

 }else{
upDown.textContent = "♥ 정답입니다 ♥"
upDown.style.color ="rgb(68, 0, 151)"

if(chance == 7){
    chanceArea.textContent = "한 번에 맞추셨습니당! !"
}else if(chance>0 && chance<7){
    chanceArea.textContent = `남은 기회 ${chance}번만에 정답 맞추셨습니다 ! ! `  
}

 }

 distinct.push(inputArea.value)
 console.log(distinct)

if(chance<1){
    goBtn.disabled = true;
    chanceArea.textContent = "꽝 ! 남은 기회가 없습니다! !"
}

}

