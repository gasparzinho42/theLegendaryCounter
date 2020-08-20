window.onload= function(){
    let number = 0
    const plus = document.getElementById("plus")
        .addEventListener("click", cPlus)

    let minus = document.getElementById("minus")
        .addEventListener('click', cMinus)
     let reset = document.getElementById("reset")
        .addEventListener("click", bReset)

    let contador = document.getElementById("contador") 

    function cPlus(){
        console.log("plus")
        number = number + 1;
        contador.innerHTML = number

    }
    function cMinus(){
        console.log("minus")
        number = number - 1;
        contador.innerHTML = number

    }
    function bReset(){
        console.log("reset")
        number = 0
        contador.innerHTML = number
    }
}