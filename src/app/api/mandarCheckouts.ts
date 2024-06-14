// emailUtils.js
export async function checkoutPack(pack: any) {
    try {
      const response = await fetch("../../api/fetching/checkout/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(pack),
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