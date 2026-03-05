<button id="payBtn">Pay 0.01 Pi</button>

<script src="https://sdk.minepi.com/pi-sdk.js"></script>
<script>
Pi.init({ version: "2.0" });

document.getElementById("payBtn").onclick = function() {

  Pi.createPayment({
    amount: 0.01,
    memo: "Rixos Test Payment",
    metadata: { product: "Rixos Test" },

    onReadyForServerApproval: function(paymentId) {
      console.log("Ready for approval:", paymentId);
    },

    onReadyForServerCompletion: function(paymentId, txid) {
      alert("تم الدفع بنجاح!");
      console.log("Payment complete:", paymentId, txid);
    },

    onCancel: function(paymentId) {
      alert("تم إلغاء الدفع");
    },

    onError: function(error) {
      console.error(error);
      alert("حدث خطأ أثناء الدفع: " + error.message);
    }

  });

};
</script>
