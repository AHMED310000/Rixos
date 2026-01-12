import express from 'express';
import path from 'path';
import fetch from 'node-fetch';

const app = express();
app.use(express.json());

const API_KEY = 'YOUR_API_KEY';
const RECEIVER_PI_ID = 'receiver_pi_id';
const PI_API_URL = 'https://api.minepi.com/v2/payments';

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="ar">
    <head>
      <meta charset="UTF-8">
      <title>متجري Pi</title>
    </head>
    <body>
      <h1>مرحبا بك في متجر Pi</h1>

      <div>
        <h2>منتج 1</h2>
        <p>السعر: 10 Pi</p>
        <button onclick="pay('pi_user_id', 10)">ادفع الآن</button>
      </div>

      <div>
        <h2>منتج 2</h2>
        <p>السعر: 20 Pi</p>
        <button onclick="pay('pi_user_id', 20)">ادفع الآن</button>
      </div>

      <script>
        async function pay(userId, amount) {
          try {
            const res = await fetch('/pay', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ userId, amount })
            });
            const data = await res.json();
            alert(JSON.stringify(data, null, 2));
          } catch (err) {
            alert('حدث خطأ: ' + err.message);
          }
        }
      </script>
    </body>
    </html>
  `);
});

app.post('/pay', async (req, res) => {
  const { userId, amount } = req.body;

  if (!userId || !amount) {
    return res.status(400).json({ success: false, error: 'Missing userId or amount' });
  }

  try {
    const response = await fetch(PI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        sender: userId,
        receiver: RECEIVER_PI_ID,
        amount: amount,
        currency: 'Pi',
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ success: false, data });
    }

    res.json({ success: true, data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

const PORT = 7002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
