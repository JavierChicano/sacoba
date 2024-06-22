export async function checkoutProductoDomicilio({
  productos,
  onLoad,
  procedencia,
}: {
  productos: any;
  onLoad: () => void;
  procedencia: string;
}) {
  const datos = {
    productos: productos,
    procedencia: procedencia,
  };
  try {
    const response = await fetch(
      "../../api/fetching/checkout/envioDomicilio/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productos),
      }
    );
    onLoad();
    if (response.ok) {
      const session = await response.json();
      window.location.href = session.url;
    } else {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function checkoutProductoRecogidaTienda({
  productos,
  onLoad,
  procedencia,
}: {
  productos: any;
  onLoad: () => void;
  procedencia: string;
}) {
  const datos = {
    productos: productos,
    procedencia: procedencia,
  };
  console.log(procedencia)
  try {
    const response = await fetch("../../api/fetching/checkout/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });
    onLoad();
    if (response.ok) {
      const session = await response.json();
      window.location.href = session.url;
    } else {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
}
