export async function handler(event, context) {
  const paymentId = `rixos_payment_${Date.now()}`;

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      identifier: paymentId,
      amount: 0.01,
      memo: "Test payment for Rixos"
    })
  };
}
