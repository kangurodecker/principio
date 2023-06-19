const descuentoEstudiante = 0.2;
const descuentoTrainee = 0.5;
const descuentoJunior = 0.85;
const valorEntrada = 200;

// tomo los valores del documento

const cantidad = document.querySelector('#cantidad');
const categoria = document.querySelector('#categoria');

const botonCalcular = document.querySelector('#botonCalcular');
const botonReset = document.querySelector('#botonReset');

function total(){
    let totalValor = parseInt(cantidad.value)*valorEntrada;
    if (categoria.value == 1) {
        totalValor = totalValor*descuentoEstudiante          
    }
    else if (categoria.value == 2) {
        totalValor = totalValor*descuentoTrainee  
    }
    else if (categoria.value == 3) {
        totalValor = totalValor*descuentoJunior 
    }
parrafoTotal.innerHTML = "Total a pagar: $" + totalValor;
}

botonCalcular.addEventListener('click',total);

botonReset.addEventListener('click',()=>{
    parrafoTotal.innerHTML = "Total a pagar:"
    cantidad.value = null;
}
)