const listaAux = [
    100,
    200,
    500,
    400000,
];
const lista1 = listaAux.sort();

const mitadLista = parseInt(lista1.length / 2);

function calcularPromedio(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulad = 0, nuevoElemento){
            return valorAcumulad + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function esPar(numero){
    if(numero % 2 === 0){
        return true;    
    }else{
        return false;
    }
}

let mediana;

if (esPar(lista1.length)){
    const elemento1 = lista1[mitadLista];
    const elemento2 = lista1[mitadLista - 1];

    const promedio = calcularPromedio([elemento1, elemento2]);

    mediana = promedio;

}else{
    mediana = lista1[mitadLista];
}