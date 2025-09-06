const primero = document.getElementById("first")
const segundo = document.getElementById("second")

function calculando(){

     

    if(primero.value > segundo.value){

        primero.classList.add("mayor")
        primero.classList.remove("menor")
        segundo.classList.add("menor")
        segundo.classList.remove("mayor")

    }else if(segundo.value > primero.value){

        segundo.classList.add("mayor")
        segundo.classList.remove("menor")
        primero.classList.add("menor")
        primero.classList.remove("mayor")

    }else if( primero.value == segundo.value){

        primero.classList.add("mayor")
        primero.classList.remove("menor")
        segundo.classList.add("mayor")
        segundo.classList.remove("menor")

    }

}

primero.addEventListener("input", calculando)
segundo.addEventListener("input", calculando)