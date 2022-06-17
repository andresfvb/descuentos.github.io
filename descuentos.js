function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * (porcentajePrecioConDescuento)) / 100;
    return precioConDescuento
}

const cupones = [
    "hoy_amor",
    "hoy_amistad",
    "colombia",
];
function calcularDescuento(){
    const price = document.getElementById("inputPrice");
    const priceValue = price.value;

    const inputCoupon = document.getElementById("inputCupon");
    const couponValue = inputCoupon.value;

    let descuento;

    switch (couponValue){
        case cupones[0]:
            descuento=15;
        break;
        case cupones[1]:
            descuento = 20;
        break;
        case cupones[2]:
            descuento = 30;
        break;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

