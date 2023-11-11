function saludo(){
    alert("BIENVENIDO USUARIO - SIN PALABRAS");
}

function suma(){
    //Declaramos las variables necesarias

    let A=0;
    let B=0;
    let SUMA=0;
    //solitamos los valores//
    alert("Este algoritmo realiza la suma de los valores ingresados por usted");

    A= parseInt(prompt("Por favor ingrese el primer valor a sumar "));
    B= parseInt(prompt("Por favor ingrese el segundo valor a sumar"));
    //Realizamos las operaciones
    SUMA = A+B
    //Mostramos resultado
    alert("El resultado de la suma es " + SUMA);

}
function operaciones(){
    //declaramos variables
    let A=0;
    let B=0;
    let RESTA=0;
    let MULTIPLICACION=0;
    let DIVISION=0;

    //Solicitamos valores
    alert("Este algoritmo realiza operaciones basicas  de los valores ingresados por usted");
    A= parseInt(prompt("Por favor ingrese el primer valor "));
    B= parseInt(prompt("Por favor ingrese el segundo valor  "));
    //Realizamos las opreaciones
    RESTA = A-B
    MULTIPLICACION=A*B
    DIVISION=A/B
    //Mostramos resultado
    alert("El resultado de la resta es " + RESTA );
    alert("El resultado de la multiplicacion es " + MULTIPLICACION);
    alert("El resultado de la division es " + DIVISION);
}
function cuadrado(){
    //declaramos variables
    let A,B=0;
    let CUADRADOA=2;
    let CUADRADOB=2;
    
    //Solicitamos valores
    alert("Este algoritmo muestra el resultado del numero ingresado al cuadrado")
    A= parseInt(prompt("Por favor ingrese el primer valor"));
    B= parseInt(prompt("Por favor ingrese el segundo valor"));
    //Realizamos las opreaciones
     CUADRADOA= A*CUADRADOA;
     CUADRADOB= B*CUADRADOB;
     //Mostramos resultado
     alert("El resultado del primer valor es " + CUADRADOA);
     alert("El resultado del segundo valor es " + CUADRADOB);

}
function areaT(){
        // Declaramos variables y las inicializamos
        let A = 0;
        let B = 0;
        let area=0;
        alert("Este algoritmo calcula el area de un triangulo segun los valores ingresados");
        // Solicitamos valores 
        A = parseInt(prompt("Por favor ingrese el valor de la base"));
        B = parseInt(prompt("Por favor ingrese el valor de la altura"));
        //Realizamos las opreaciones
       area=(A*B)/2;
       //Mostramos resultado
       alert("El area es " + area);
    }
function numeroMayor(){
    let A,B=0;

    alert("Este algoritmo realiza una resta de valores ingresados por usted ");

    A=parseInt(prompt("Ingrese el primer valor"));
    B=parseInt(prompt("Ingrese el segundo valor"));

    if (A == B) {
        alert("Los valores ingresados son iguales");
    }
    else if (A > B){
        alert(A + " Es mayor que " + B);
    }
    else{
        alert(B + " Es mayo que " + A);
    }
}

function convertirUnidades() {

    let valor = 0;
    let centimetros = 0;
    let pulgadas = 0;
    let pies = 0;
    let kilometros = 0;
    let millas = 0.621371;

    alert("Este algoritmo convierte unidades de medida.");
    valor = parseInt(prompt("Por favor, ingrese el valor a convertir:"));

    centimetros = valor * 100;
    pulgadas = valor * 39.3701;
    pies = valor * 3.28084;
    kilometros = valor * 0.001;

    alert("El valor en centímetros es: " + centimetros);
    alert("El valor en pulgadas es: " + pulgadas);
    alert("El valor en pies es: " + pies);
    alert("El valor en kilómetros es: " + kilometros);
    alert("El valor en millas es: " + (valor * millas));
}

function conversorTempe(){
    
    let valor = 0;
    let celsius = 0;
    let fahrenheit = 0;

    
    alert("Este algoritmo convierte temperaturas.");
    valor = parseFloat(prompt("Por favor, ingrese la temperatura a convertir:"));

    
    celsius = (valor - 32) * (5/9); 
    fahrenheit = (valor * (9/5)) + 32; 

    // Displaying results
    alert("El valor en Celsius es: " + celsius.toFixed(2));
    alert("El valor en Fahrenheit es: " + fahrenheit.toFixed(2));
}

function promedio(){
    // Declaramos variables y las inicializamos
    let A=0;
    let B=0;
    let C=0;
    let D=0;
    let pro=4;
    let promedio=0;
    // Solicitamos valores
    alert("Este algoritmo realiza el calculo del promedio del estudiante");
    A=parseInt(prompt("Por favor ingresar la primera nota"));
    B=parseInt(prompt("Por favor ingresar la segunda nota")); 
    C=parseInt(prompt("Por favor ingresar la tercera nota")); 
    D=parseInt(prompt("Por favor ingresar la cuarta nota")); 
    //Realizamos las opreaciones
    promedio=(A+B+C+D)/pro;
    //Mostramos resultado
    alert("El promedio del estudiante es " + promedio);
}
b 
function par(){
    let numero=0;
    let resultado=0;
    numero=parseInt(prompt("Ingrese el valor numerico"));
    if (numero % 2 === 0) {
        return "El numero es par";    
    } else{
        return "El numero es impar";
    }

}

function salario(){
    let horasTrabajadas = 0;
    const salarioPorHoraNormal = 10000;
    const salarioPorHoraExtra = 20000;
    const horasNormales = 40;

    // Soliciting user input
    alert("Este algoritmo calcula el salario semanal de un obrero.");
    horasTrabajadas = parseFloat(prompt("Por favor, ingrese la cantidad de horas trabajadas en la semana:"));

    // Calculating the weekly salary
    let salarioSemanal = 0;

    if (horasTrabajadas <= horasNormales) {
        salarioSemanal = horasTrabajadas * salarioPorHoraNormal;
    } else {
        // Calculating salary for the first 40 hours
        salarioSemanal = horasNormales * salarioPorHoraNormal;
        
        // Calculating salary for extra hours
        const horasExtras = horasTrabajadas - horasNormales;
        salarioSemanal += horasExtras * salarioPorHoraExtra;
    }

    // Displaying the result
    alert("El salario semanal es: $" + salarioSemanal.toFixed(2));
}


function menorQueTres() {
    
    let numero1 = 0;
    let numero2 = 0;
    let numero3 = 0;

    alert("Este algoritmo verifica si tres números son menores que 3.");
    numero1 = parseInt(prompt("Por favor, ingrese el primer número:"));
    numero2 = parseInt(prompt("Por favor, ingrese el segundo número:"));
    numero3 = parseInt(prompt("Por favor, ingrese el tercer número:"));

    if (numero1 < 3 && numero2 < 3 && numero3 < 3) {
        alert("Todos los números son menores que 3.");
    } else {
        alert("Al menos uno de los números no es menor que 3.");
    }
}

