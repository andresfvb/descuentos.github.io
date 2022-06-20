const lista1 = [
    100,
    200,
    300,
    500,
];


function calcularPromedio(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulad = 0, nuevoElemento){
            return valorAcumulad + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}