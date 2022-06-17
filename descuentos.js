function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * (porcentajePrecioConDescuento)) / 100;
    return precioConDescuento
}

function calcularDescuento(){
    const price = document.getElementById("inputPrice");
    const priceValue = price.value;

    const discount = document.getElementById("inputDiscount");
    const discountValue = discount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}