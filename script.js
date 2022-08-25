const buttons=document.querySelectorAll("button")
let str=""
const input=document.getElementById("input")

for(var button of buttons){
    button.addEventListener("click",(e)=>{
         if(e.target.innerText=="="){
            str=eval(str) //`${e.target.innerText}`        
            
         }
        
        else if(e.target.innerText=="Reset"){
            str=""
        }
        else if(e.target.innerText=="C"){
            str=str.slice(0, -1)
        }
         else{
         str+=`${e.target.innerText}`
         }
    input.value=str
        // console.log(str)
        // console.log(input)
    })
}