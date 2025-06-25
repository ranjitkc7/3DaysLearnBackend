export const esewaPayment = (req, res) => {
  const amount = parseInt(req.body.amount);
  const user_id = req.body.user_id;
  const product_id = req.body.product_id;

  const tax_amount = 10;
  const product_service_charge = 15;
  const product_delivery_charge = 20;

  const total_amount =
    amount + tax_amount + product_service_charge + product_delivery_charge;

  const transaction_uuid = "TXN" + user_id + product_id + Date.now();
  const product_code = "EPAYTEST";
 const success_url = "http://127.0.0.1:5500/payment-success.html";
 const failure_url = "http://127.0.0.1:5500/payment-failure.html";

  res.send(`
      <html>
        <body onload="document.forms[0].submit()">
          <form action="https://rc.esewa.com.np/epay/main" method="POST">
            <input type="hidden" name="amt" value="${amount}" />
            <input type="hidden" name="txAmt" value="${tax_amount}" />
            <input type="hidden" name="psc" value="${product_service_charge}" />
            <input type="hidden" name="pdc" value="${product_delivery_charge}" />
            <input type="hidden" name="tAmt" value="${total_amount}" />
            <input type="hidden" name="pid" value="${transaction_uuid}" />
            <input type="hidden" name="scd" value="${product_code}" />
            <input type="hidden" name="su" value="${success_url}" />
            <input type="hidden" name="fu" value="${failure_url}" />
          </form>
          <p>Redirecting to eSewa...</p>
        </body>
      </html>
    `);
};
