export async function checkoutProductoDomicilio({
  productos,
  onLoad,
}: {
  productos: any;
  onLoad: () => void;
}) {
    try {
      const response = await fetch("../../api/fetching/checkout/envioDomicilio/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(productos),
      });
      onLoad()
      if (response.ok) {
        const session = await response.json();
        window.location.href = session.url;
        console.log(session);
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
  }: {
    productos: any;
    onLoad: () => void;
  }) {
    try {
      const response = await fetch("../../api/fetching/checkout/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(productos),
      });
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