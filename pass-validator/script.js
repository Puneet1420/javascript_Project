const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const cheak = document.querySelector(".cheak");
const result = document.querySelector(".result");
input1.value = null;
input2.value = null;

cheak.addEventListener('click',function(){
    if  (input1.value === input2.value ) {
        result.innerHTML = "password Matched";
        result.style.color = "lightgreen";
        console.log("password Matched");
        input1.value= null;
        input2.value= null;   
    } else {
        result.innerHTML = "Password validation Unsuccessful";
        result.style.color = "red";
        console.log("Password Did Not matched, || Password validation Unsuccessful");
        input1.value= null;
        input2.value= null;
        
    }setTimeout(function(){
        result.innerHTML = "";
    },3000);
    
})
