// emailUtils.js
export async function sendEmail(emailData: any) {
  try {
    const response = await fetch("../../api/send/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Asegúrate de enviar el Content-Type correcto
      },
      body: JSON.stringify(emailData),
    });
    if (response.ok) {
      console.log("ok");
    } else {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
}