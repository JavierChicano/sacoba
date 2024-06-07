// emailUtils.js
export async function sendEmail(emailData: any) {
  try {
    const response = await fetch("../../api/send/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    });
    console.log(response);

    if (response.ok) {
      console.log("ok");
    } else {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
}