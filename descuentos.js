function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function onClickbuttonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    couponValue
  );
  const coupons = [
    {
      name: "Fabuloso75",
      discount: 75,
    },
    {
      name: "Fabuloso50",
      discount: 50,
    },
    {
      name: "Rocio35",
      discount: 35,
    },
    {
      name: "Chompi30",
      discount: 30,
    },
    {
      name: "Fabuloso25",
      discount: 25,
    },
    {
      name: "Chompi10",
      discount: 10,
    },
    {
      name: "Rocio5",
      discount: 5,
    },
  ];

  const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
  };
  const userCoupon = coupons.find(isCouponValueValid);

  if (!userCoupon) {
    alert("El cupon $couponValue no es valido");
  } else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(
      priceValue,
      descuento
    );
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es de $ " + precioConDescuento;
  }
}
