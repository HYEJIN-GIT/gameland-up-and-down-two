//먼저 랜덤 숫자 나오게 설정하기
//input에 값 넣고 go 버튼 누르면 결과 값 나오게 하기




let random = 0;
let goBtn = document.getElementById("btn")
let inputArea = document.getElementById("input-area")

goBtn.addEventListener("click",go)


function randomNum () {
    random = Math.floor(Math.random()*50+1)
}

randomNum();
console.log(random)


function go (){
   if(inputArea<1 ||inputArea.value >50){
    console.log(inputArea)
    return
   }



}