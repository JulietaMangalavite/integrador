const btnResumen = document.getElementById("btn-resumen");
const btnResetear = document.getElementById("btnResetear");


const cant = document.getElementById("cantidad");

function total() {
    const categoria = document.getElementById("categoria");
    let totalPagar = 0;

    if (cant.value >= 1) {
        
        switch (categoria.value) {

            case "Estudiante":
            totalPagar= (40 * cant.value);
            break
            
            case "Trainee":
                
                totalPagar= (100 * cant.value);
            break
            
            case "Junior":
               
                totalPagar= (170 * cant.value);
            break
            
            }
    const elTotal = document.getElementById("resultado");
    return elTotal.innerHTML = "Total a pagar: $" + totalPagar;

    } else {
    const elTotal = document.getElementById("resultado");
    return elTotal.innerHTML = "Ingrese una cantidad";
    }   

}


function reset() {
   resetPagar()
}

function resetPagar() {
    const elTotal = document.getElementById("resultado");
    elTotal.innerHTML = "Total a pagar: $";
} 

btnResetear.onclick = reset

btnResumen.onclick = total;
