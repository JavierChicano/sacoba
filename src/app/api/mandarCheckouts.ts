export async function checkoutProductoDomicilio(productos: any) {
    try {
      const response = await fetch("../../api/fetching/checkout/envioDomicilio/", {
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

  export async function checkoutProductoRecogidaTienda(productos: any) {
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