const remValue = document.querySelector(".rem");
const pxValue = document.querySelector(".px");
const remValueInput = document.querySelector(".remNum");
const pxValueInput = document.querySelector(".pxNum");
const button = document.querySelector(".btn");
const btn = document.querySelector('.btn-Two')
const resetBtn = document.querySelector(".reset-btn");




button.addEventListener("click", (e) => {
    remValueField()

})

btn.addEventListener("click", (e) => {
    pxValueField()
})


resetBtn.addEventListener("click", (e) => {
    pxValue.innerHTML = "px"
    remValue.innerHTML = "rem"
    remValueInput.value = ''
    pxValueInput.value  =''
})

function remValueField(){

    pxValue.innerHTML = `${remValueInput.value * 16 } px` 
 
}


function pxValueField(){
    remValue.innerHTML = `${pxValueInput.value / 16} rem`
    
}








