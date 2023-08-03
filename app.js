const calcular = document.querySelector("#btnCalcular")
const inputNumeroIngresado = document.querySelector("#numeroIngresado");
const divResultado = document.querySelector("#resultado")

calcular.addEventListener("click", calcularMetros)

function calcularMetros() {
    const numero = parseFloat(inputNumeroIngresado.value); // Convertir el valor del input a número
    const resultado = (9/5*numero)+32;
    
    divResultado.innerHTML=""
    const div = document.createElement("div")
    div.innerHTML=`
    <div>
        <h3>Tu resultado para el valor ingresado de ${numero}°C es de ${resultado}°F</h3>
    </div>  
`
divResultado.append(div)
}
